var ApplicationAuthorizationApi = require('application_authorization_api');
var FirmatekMissionsApi = require('firmatek_missions_api');
var FirmatekProductsApi = require('firmatek_products_api');
var FirmatekKnownSurfacesApi = require('firmatek_known_surfaces_api');
var FirmatekDownloadsApi = require('firmatek_downloads_api');

const kespry_api_host = process.env.KESPRY_API_HOST || 'https://services.kespry.com'

const readline = require('readline');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function promptCommand() {
  const p = `
Command:
   (1) List Sites
   (2) List Missions for a Site
   (3) List latest Mission for each Site
   (4) List Markers for a Mission
   (5) List Volumes for a Mission
   (6) List Products for a Site
   (7) List Known Surfaces for a Site
   (8) Request a new Download for a Mission
   (9) Download an Existing Download for a Mission
   (0) Exit
Enter command (0-9): `;
  return new Promise((resolve) => rl.question(p, resolve));
}

function getSitesAsync(missionsAPI) {
  return new Promise((resolve, reject) => {
    missionsAPI.getSites((error, sites, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(sites);
      }
    });
  });
}
function getMissionsAsync(missionsAPI, siteId) {
  return new Promise((resolve, reject) => {
    missionsAPI.getMissions(parseInt(siteId), (error, missions, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(missions);
      }
    });
  });
}
function getLatestMissionAsync(missionsAPI, siteId) {
  return new Promise((resolve, reject) => {
    missionsAPI.getMissionsLatestForSite(parseInt(siteId), (error, mission, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(mission);
      }
    });
  });
}
function getMarkersAsync(missionsAPI, siteId, missionId) {
  return new Promise((resolve, reject) => {
    missionsAPI.apiClient.callApi(
      '/v1/sites/{site_id}/missions/{mission_id}/markers', 'GET',
      { 'site_id': parseInt(siteId), 'mission_id': parseInt(missionId) }, {}, {}, {}, {}, null,
      ['apikey'], ['application/json'], ['application/json'],
      [Object], (error, data) => {
        if (error) reject(error);
        else resolve(data);
      }
    );
  });
}
function getVolumesAsync(missionsAPI, siteId, missionId) {
  return new Promise((resolve, reject) => {
    missionsAPI.getMarkerVolumes(parseInt(missionId), parseInt(siteId), (error, missions, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(missions);
      }
    });
  });
}
function getProductsAsync(productsAPI, siteId) {
  return new Promise((resolve, reject) => {
    productsAPI.apiClient.callApi(
      '/v1/sites/{site_id}/products', 'GET',
      { 'site_id': parseInt(siteId) }, {}, {}, {}, {}, null,
      ['apikey'], ['application/json'], ['application/json'],
      [Object], (error, data) => {
        if (error) reject(error);
        else resolve(data);
      }
    );
  });
}
function getKnownSurfacesAsync(knownSurfacesAPI, siteId) {
  return new Promise((resolve, reject) => {
    knownSurfacesAPI.apiClient.callApi(
      '/v1/sites/{site_id}/known-surfaces', 'GET',
      { 'site_id': parseInt(siteId) }, {}, {}, {}, {}, null,
      ['apikey'], ['application/json'], ['application/json'],
      [Object], (error, data) => {
        if (error) reject(error);
        else resolve(data);
      }
    );
  });
}
function getAvailableDownloadsAsync(downloadsAPI, siteId, missionId) {
  return new Promise((resolve, reject) => {
    downloadsAPI.apiClient.callApi(
      '/v1/sites/{site_id}/missions/{mission_id}/available_downloads', 'GET',
      { 'site_id': parseInt(siteId), 'mission_id': parseInt(missionId) }, {}, {}, {}, {}, null,
      ['apikey'], ['application/json'], ['application/json'],
      [Object], (error, data) => {
        if (error) reject(error);
        else resolve(data);
      }
    );
  });
}
function getDownloadJobsAsync(downloadsAPI, siteId, missionId) {
  return new Promise((resolve, reject) => {
    downloadsAPI.apiClient.callApi(
      '/v1/sites/{site_id}/missions/{mission_id}/jobs', 'GET',
      { 'site_id': parseInt(siteId), 'mission_id': parseInt(missionId) }, {}, {}, {}, {}, null,
      ['apikey'], ['application/json'], ['application/json'],
      [Object], (error, data) => {
        if (error) reject(error);
        else resolve(data);
      }
    );
  });
}
function createDownloadJobAsync(downloadsAPI, siteId, missionId, body) {
  return new Promise((resolve, reject) => {
    downloadsAPI.apiClient.callApi(
      '/v1/sites/{site_id}/missions/{mission_id}/jobs', 'POST',
      { 'site_id': parseInt(siteId), 'mission_id': parseInt(missionId) }, {}, {}, {}, {}, body,
      ['apikey'], ['application/json'], ['application/json'],
      Object, (error, data) => {
        if (error) reject(error);
        else resolve(data);
      }
    );
  });
}
function getDownloadJobStatusAsync(downloadsAPI, siteId, missionId, jobId) {
  return new Promise((resolve, reject) => {
    downloadsAPI.apiClient.callApi(
      '/v1/sites/{site_id}/missions/{mission_id}/jobs/{download_job_id}', 'GET',
      { 'site_id': parseInt(siteId), 'mission_id': parseInt(missionId), 'download_job_id': jobId },
      {}, {}, {}, {}, null,
      ['apikey'], ['application/json'], ['application/json'],
      Object, (error, data) => {
        if (error) reject(error);
        else resolve(data);
      }
    );
  });
}
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Coerce a raw prompt string into the type implied by the download param.
function coerceParamValue(param, raw) {
  if (param.param_type === 'bool') {
    return ['true', '1', 'yes', 'y'].includes(raw.trim().toLowerCase());
  }
  if (param.param_type === 'range') {
    const n = Number(raw);
    return Number.isNaN(n) ? raw : n;
  }
  return raw;
}

function filenameFromUrl(fileUrl, fallback) {
  try {
    const base = path.basename(new URL(fileUrl).pathname);
    if (base) return decodeURIComponent(base);
  } catch (e) { /* fall through to fallback */ }
  return fallback;
}

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    const client = fileUrl.startsWith('https:') ? https : http;
    client.get(fileUrl, (response) => {
      const { statusCode, headers } = response;
      if (statusCode >= 300 && statusCode < 400 && headers.location) {
        response.resume();
        downloadFile(headers.location, destPath).then(resolve, reject);
        return;
      }
      if (statusCode !== 200) {
        response.resume();
        reject(new Error(`Download failed with status ${statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(destPath);
      response.pipe(fileStream);
      fileStream.on('finish', () => fileStream.close(() => resolve(destPath)));
      fileStream.on('error', (err) => fs.unlink(destPath, () => reject(err)));
    }).on('error', reject);
  });
}

const trunc = (s, len = 30) => (s && s.length > len) ? s.substring(0, len) + '…' : s;

async function performOperation(operation, missionsAPI, productsAPI, knownSurfacesAPI, downloadsAPI) {
    switch (operation.toLowerCase()) {
        case '1': {
            const sites = await getSitesAsync(missionsAPI);
            if (Array.isArray(sites)) {
                console.table(sites.map(s => ({
                    id: s.id, name: trunc(s.name), customer_id: s.customerId,
                    center_lng: s.centerLng, center_lat: s.centerLat
                })));
            }
            break;
        }
        case '2': {
            const siteId = await prompt('Enter a Site ID: ');
            const missions = await getMissionsAsync(missionsAPI, siteId);
            if (Array.isArray(missions)) {
                console.table(missions.map(m => ({
                    id: m.id, uid: trunc(m.uid), status: m.status, operator: trunc(m.operator),
                    captured_at: m.capturedAt, created_at: m.createdAt, updated_at: m.updatedAt
                })));
            }
            break;
        }
        case '3': {
            const sites = await getSitesAsync(missionsAPI);
            if (Array.isArray(sites)) {
                const rows = [];
                for (const site of sites) {
                    const mission = await getLatestMissionAsync(missionsAPI, site.id);
                    if (mission && mission.id) {
                        rows.push({
                            site_id: site.id, site_name: trunc(site.name),
                            mission_id: mission.id, uid: trunc(mission.uid), status: mission.status,
                            operator: trunc(mission.operator), captured_at: mission.capturedAt,
                            created_at: mission.createdAt, updated_at: mission.updatedAt
                        });
                    } else {
                        rows.push({ site_id: site.id, site_name: trunc(site.name) });
                    }
                }
                console.table(rows);
            }
            break;
        }
        case '4': {
            const siteId = await prompt('Enter a Site ID: ');
            const missionId = await prompt('Enter a Mission ID: ');
            const markers = await getMarkersAsync(missionsAPI, siteId, missionId);
            if (Array.isArray(markers)) {
                console.log('\nMarker summary:');
                console.table(markers.map(m => ({
                    id: m.id, name: trunc(m.name), description: trunc(m.description),
                    marker_type: m.marker_type, pile_id: m.pile_id,
                    locked: m.locked, use_extracted: m.use_extracted,
                    updated_at: m.updated_at, updated_by: trunc(m.updated_by)
                })));

                console.log('\nVolume configuration:');
                console.table(markers.map(m => ({
                    id: m.id, product_id: m.product_id, is_manual: m.is_manual,
                    volume_mode: m.volume_mode, density: m.density,
                    offset: m.offset, fixed_elevation: m.fixed_elevation,
                    known_surface_id: m.known_surface_id
                })));

                const withGeojson = markers.filter(m => m.geojson);
                if (withGeojson.length > 0) {
                    console.log('\nGeometry:');
                    console.table(withGeojson.map(m => ({
                        marker_id: m.id, geojson: trunc(JSON.stringify(m.geojson), 80)
                    })));
                }

                const withBasePoints = markers.filter(m => m.base_points);
                if (withBasePoints.length > 0) {
                    console.log('\nBase points:');
                    console.table(withBasePoints.map(m => ({
                        marker_id: m.id, base_points: trunc(JSON.stringify(m.base_points), 80)
                    })));
                }

                const withMessages = markers.filter(m => Array.isArray(m.messages) && m.messages.length > 0);
                if (withMessages.length > 0) {
                    console.log('\nMessages:');
                    console.table(withMessages.map(m => ({
                        marker_id: m.id, messages: trunc(JSON.stringify(m.messages), 80)
                    })));
                }

                for (const m of markers) {
                    if (Array.isArray(m.comparison_surfaces) && m.comparison_surfaces.length > 0) {
                        console.log(`\nComparison surfaces for marker ${m.id} (${trunc(m.name)}):`);
                        console.table(m.comparison_surfaces.map(cs => ({
                            id: cs.id, comparison_surface_id: cs.comparison_surface_id,
                            type: cs.comparison_surface_type, name: trunc(cs.name),
                            elevation: cs.elevation
                        })));
                    }
                }
            }
            break;
        }
        case '5': {
            const siteId = await prompt('Enter a Site ID: ');
            const missionId = await prompt('Enter a Mission ID: ');
            const volumes = await getVolumesAsync(missionsAPI, siteId, missionId);
            if (Array.isArray(volumes)) {
                console.table(volumes.map(v => ({
                    num: v.num, name: trunc(v.name), description: trunc(v.description),
                    surface_desc: v.surfaceDesc, sku: v.sku, surface_area: v.surfaceArea,
                    perimeter: v.perimeter, cut_volume: v.cutVolume, fill_volume: v.fillVolume,
                    threshold: v.threshold, offset: v.offset, density: v.density,
                    cut_mass: v.cutMass, fill_mass: v.fillMass, uses_extracted: v.usesExtracted
                })));
            }
            break;
        }
        case '6': {
            const siteId = await prompt('Enter a Site ID: ');
            const products = await getProductsAsync(productsAPI, siteId);
            if (Array.isArray(products)) {
                console.table(products.map(p => ({
                    id: p.id, name: trunc(p.name), site_id: p.site_id
                })));
            }
            break;
        }
        case '7': {
            const siteId = await prompt('Enter a Site ID: ');
            const surfaces = await getKnownSurfacesAsync(knownSurfacesAPI, siteId);
            if (Array.isArray(surfaces)) {
                console.table(surfaces.map(s => ({
                    id: s.id, name: trunc(s.surface_name), description: trunc(s.surface_description),
                    review_status: s.review_status, created_at: s.created_at, updated_at: s.updated_at
                })));
            }
            break;
        }
        case '8': {
            const siteId = await prompt('Enter a Site ID: ');
            const missionId = await prompt('Enter a Mission ID: ');
            const downloads = await getAvailableDownloadsAsync(downloadsAPI, siteId, missionId);
            if (!Array.isArray(downloads) || downloads.length === 0) {
                console.log('No downloads are available for this mission.');
                break;
            }

            // 1-based index: console.table keys the index column off the object keys.
            const rows = {};
            downloads.forEach((d, i) => {
                rows[i + 1] = {
                    name: trunc(d.name), label: trunc(d.label), filename: trunc(d.filename),
                    note: trunc(d.note), params: Array.isArray(d.params) ? d.params.length : 0
                };
            });
            console.table(rows);

            console.log(`Available indices: ${downloads.map((d, i) => i + 1).join(', ')} (0 = don't request anything)`);
            const choice = await prompt('Enter the index of the download to request: ');
            const selectedIndex = parseInt(choice);
            if (selectedIndex === 0 || Number.isNaN(selectedIndex)) {
                break;
            }
            if (selectedIndex < 1 || selectedIndex > downloads.length) {
                console.log(`Index ${choice} is not a valid option.`);
                break;
            }
            const available = downloads[selectedIndex - 1];

            // Prompt for each parameter. Required params must be supplied; optional
            // params left blank are omitted from download_options.
            const downloadOptions = {};
            for (const param of (available.params || [])) {
                const req = param.required ? 'required' : 'optional';
                const allowed = param.values !== undefined ? `, allowed: ${JSON.stringify(param.values)}` : '';
                let value;
                while (true) {
                    const raw = await prompt(`  ${param.label || param.name} [${param.name}] (${param.param_type}, ${req}${allowed}): `);
                    if (raw.trim() === '') {
                        if (param.required) {
                            console.log('  This parameter is required.');
                            continue;
                        }
                        value = undefined;
                    } else {
                        value = coerceParamValue(param, raw);
                    }
                    break;
                }
                if (value !== undefined) {
                    downloadOptions[param.name] = value;
                }
            }

            const body = { download_type: available.name };
            if (Object.keys(downloadOptions).length > 0) {
                body.download_options = downloadOptions;
            }

            console.log(`Requesting download "${available.name}" ...`);
            const job = await createDownloadJobAsync(downloadsAPI, siteId, missionId, body);
            if (!job || !job.job_id) {
                console.log('No job ID returned from the download request.');
                break;
            }
            console.log(`Created job ${job.job_id}; waiting for it to complete...`);

            const POLL_INTERVAL_MS = 5000;
            const MAX_ATTEMPTS = 60; // ~5 minutes
            let status = job.status;
            let latest = job;
            for (let attempt = 0; attempt < MAX_ATTEMPTS && status !== 'SUCCESS'; attempt++) {
                if (status === 'FAILED' || status === 'STOPPED') break;
                await sleep(POLL_INTERVAL_MS);
                latest = await getDownloadJobStatusAsync(downloadsAPI, siteId, missionId, job.job_id);
                status = latest.status;
                console.log(`  status: ${status}`);
            }

            if (status !== 'SUCCESS') {
                console.log(`Download did not complete (last status: ${status}).`);
                break;
            }
            // The presigned URL can lag the SUCCESS status by a moment; give it
            // one more poll to populate before giving up.
            if (!latest.presigned_url) {
                console.log('  succeeded but no download URL yet; polling once more...');
                await sleep(POLL_INTERVAL_MS);
                latest = await getDownloadJobStatusAsync(downloadsAPI, siteId, missionId, job.job_id);
                console.log(`  status: ${latest.status}`);
            }
            if (!latest.presigned_url) {
                console.log('Job succeeded but no download URL was provided.');
                break;
            }

            const destPath = filenameFromUrl(latest.presigned_url, available.filename || available.name || `download_${job.job_id}`);
            console.log(`Downloading to ${destPath} ...`);
            try {
                await downloadFile(latest.presigned_url, destPath);
                console.log(`Saved ${destPath}`);
            } catch (err) {
                console.error('Download failed:', err.message);
            }
            break;
        }
        case '9': {
            const siteId = await prompt('Enter a Site ID: ');
            const missionId = await prompt('Enter a Mission ID: ');
            const jobs = await getDownloadJobsAsync(downloadsAPI, siteId, missionId);
            if (!Array.isArray(jobs) || jobs.length === 0) {
                console.log('No download jobs found for this mission.');
                break;
            }

            // console.table uses the object's keys as the index column, so a
            // 1-based key map yields a 1-based index the user can select by.
            const rows = {};
            jobs.forEach((j, i) => {
                rows[i + 1] = {
                    job_id: trunc(j.job_id), name: trunc(j.name), status: j.status,
                    file_status: j.file_status, created_at: j.created_at,
                    presigned_url: trunc(j.presigned_url, 80)
                };
            });
            console.table(rows);

            const downloadableIndices = jobs
                .map((j, i) => (j.file_status === 'exists' && j.presigned_url) ? i + 1 : null)
                .filter((i) => i !== null);

            if (downloadableIndices.length === 0) {
                console.log('No files are available to download.');
                break;
            }

            console.log(`Downloadable indices: ${downloadableIndices.join(', ')} (0 = don't download any)`);
            const choice = await prompt('Enter the index of the file to download: ');
            const selected = parseInt(choice);
            if (selected === 0 || Number.isNaN(selected)) {
                break;
            }
            if (!downloadableIndices.includes(selected)) {
                console.log(`Index ${choice} is not a valid download option.`);
                break;
            }

            const job = jobs[selected - 1];
            const destPath = filenameFromUrl(job.presigned_url, job.name || `download_${job.job_id}`);
            console.log(`Downloading to ${destPath} ...`);
            try {
                await downloadFile(job.presigned_url, destPath);
                console.log(`Saved ${destPath}`);
            } catch (err) {
                console.error('Download failed:', err.message);
            }
            break;
        }
        case '0':
          console.log('Exiting...');
          return false;
        default:
          console.log('Unknown operation');
    }
    return true;
}
  
async function processCommands(data) {
  // We have a bearer token, now instantiate a Missions API client.
  var missionsClient = FirmatekMissionsApi.ApiClient.instance;
  missionsClient.basePath = `${kespry_api_host}/api/missions`

  var productsClient = FirmatekProductsApi.ApiClient.instance;
  productsClient.basePath = `${kespry_api_host}/api/products`

  var knownSurfacesClient = FirmatekKnownSurfacesApi.ApiClient.instance;
  knownSurfacesClient.basePath = `${kespry_api_host}/api/known-surfaces`

  var downloadsClient = FirmatekDownloadsApi.ApiClient.instance;
  downloadsClient.basePath = `${kespry_api_host}/api/downloads`

  const bearer = `Bearer ${data.accessToken}`;
  missionsClient.authentications['apikey'].apiKey = bearer;
  productsClient.authentications['apikey'].apiKey = bearer;
  knownSurfacesClient.authentications['apikey'].apiKey = bearer;
  downloadsClient.authentications['apikey'].apiKey = bearer;

  var missionsAPI = new FirmatekMissionsApi.V1Api()
  var productsAPI = new FirmatekProductsApi.ProductsApi()
  var knownSurfacesAPI = new FirmatekKnownSurfacesApi.KnownSurfacesApi()
  var downloadsAPI = new FirmatekDownloadsApi.DownloadsApi()
  let continueLoop = true;
  while (continueLoop) {
      const operation = await promptCommand();
      try {
        continueLoop = await performOperation(operation, missionsAPI, productsAPI, knownSurfacesAPI, downloadsAPI);
      } catch (error) {
        console.error('Error:', error.message);
      }
  }
};
  
async function authenticate(clientId, clientSecret) {
  // Instantiate the Authorization API client which will accept the client ID and secret and 
  // return a bearer token. The bearer token is used to access the Missions API.
  var authClient = ApplicationAuthorizationApi.ApiClient.instance;
  authClient.basePath = `${kespry_api_host}/api/auth`

  var basicAuth = authClient.authentications['basicAuth'];
  basicAuth.username = clientId; 
  basicAuth.password = clientSecret;

  var authAPI = new ApplicationAuthorizationApi.V1Api()
  var grantType = "client_credentials";

  authAPI.postLogin(grantType, async function(error, data, response) {
    if (error) {
      console.error('Authentication failed:', error.message);
      rl.close();
    } else {
      if (data && data.accessToken) {
        await processCommands(data);
        rl.close(); 
      } else {
        console.log('No access token found in response.');
        rl.close();
      }
    }
  });
}

async function main() {
  try {
    const clientId = await prompt('Enter your client ID: ');
    const clientSecret = await prompt('Enter your client secret: ');
    authenticate(clientId, clientSecret);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();

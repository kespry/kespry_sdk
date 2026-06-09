var ApplicationAuthorizationApi = require('application_authorization_api');
var FirmatekMissionsApi = require('firmatek_missions_api');

const kespry_api_host = process.env.KESPRY_API_HOST || 'https://services.kespry.com'

const readline = require('readline');

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
   (0) Exit
Enter command (0-7): `;
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
function getProductsAsync(missionsAPI, siteId) {
  return new Promise((resolve, reject) => {
    missionsAPI.apiClient.callApi(
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
function getKnownSurfacesAsync(missionsAPI, siteId) {
  return new Promise((resolve, reject) => {
    missionsAPI.apiClient.callApi(
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
const trunc = (s, len = 30) => (s && s.length > len) ? s.substring(0, len) + '…' : s;

async function performOperation(operation, missionsAPI) {
    console.log(`In performOperation with ${operation}`)
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
            const products = await getProductsAsync(missionsAPI, siteId);
            if (Array.isArray(products)) {
                console.table(products.map(p => ({
                    id: p.id, name: trunc(p.name), site_id: p.site_id
                })));
            }
            break;
        }
        case '7': {
            const siteId = await prompt('Enter a Site ID: ');
            const surfaces = await getKnownSurfacesAsync(missionsAPI, siteId);
            if (Array.isArray(surfaces)) {
                console.table(surfaces.map(s => ({
                    id: s.id, name: trunc(s.surface_name), description: trunc(s.surface_description),
                    review_status: s.review_status, created_at: s.created_at, updated_at: s.updated_at
                })));
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

  var apikey = missionsClient.authentications['apikey'];
  apikey.apiKey = `Bearer ${data.accessToken}`;

  var missionsAPI = new FirmatekMissionsApi.V1Api()
  let continueLoop = true;
  while (continueLoop) {
      const operation = await promptCommand();
      console.log(`Operation: ${operation}`);
      try {
        continueLoop = await performOperation(operation, missionsAPI);
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

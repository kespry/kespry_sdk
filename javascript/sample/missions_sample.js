var ApplicationAuthorizationApi = require('application_authorization_api');
var FirmatekMissionsApi = require('firmatek_missions_api');

const { resolve } = require('path');

const kespry_api_host = process.env.KESPRY_API_HOST || 'http://host.docker.internal:3001'

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function promptCommand() {
  let p = '\nCommand: \n   (1) List Sites, \n   (2) List Missions for a Site, \n   (3) List latest Mission for each Site, \n   (4) List Markers for a Mission, \n   (5) List Volumes for a Mission, or \n   (0) Exit\nEnter command (0-4): '
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
    missionsAPI.getMarkers(parseInt(missionId), parseInt(siteId), (error, missions, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(missions);
      }
    });
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
async function performOperation(operation, missionsAPI) {
    console.log(`In performOperation with ${operation}`)
    switch (operation.toLowerCase()) {
        case '1':
          {
            const sites = await getSitesAsync(missionsAPI);
            if (Array.isArray(sites)){
              console.log(`id, name, customer_id, center_lng, center_lat`);
              for (let i = 0; i < sites.length; i++) {
                let site = sites[i];
                console.log(`${site["id"]}, ${site["name"]}, ${site["customerId"]}, ${site["centerLng"]}, ${site["centerLat"]}`);
              }
            }
          }
          break;
        case '2':
          {
            const siteId = await prompt('Enter a Site ID: ');
            const missions = await getMissionsAsync(missionsAPI, siteId);
            if (Array.isArray(missions)){
              console.log(`id, uid, status, operator, captured_at, created_at, updated_at`);
              for (let i = 0; i < missions.length; i++) {
                let mission = missions[i];
                console.log(`${mission["id"]}, ${mission["uid"]}, ${mission["status"]}, ${mission["operator"]}, ${mission["capturedAt"]}, ${mission["createdAt"]}, ${mission["updatedAt"]}`);
              }
            }
          }
          break;
          case '3':
            const sites = await getSitesAsync(missionsAPI);
            if (Array.isArray(sites)){              
              console.log(`site id, site name, mission id, uid, status, operator, captured_at, created_at, updated_at`);
              for (let i = 0; i < sites.length; i++) {
                let site = sites[i];
                let siteId = site["id"]
                const mission = await getLatestMissionAsync(missionsAPI, siteId)
                if (mission && mission["id"]) {
                  console.log(`${site["id"]}, ${site["name"]}, ${mission["id"]}, ${mission["uid"]}, ${mission["status"]}, ${mission["operator"]}, ${mission["capturedAt"]}, ${mission["createdAt"]}, ${mission["updatedAt"]}`);
                } else {
                  console.log(`${site["id"]}, ${site["name"]}, , , , , , , , `);
                }
              }
            }
            break;
            case '4':
            {
              const siteId = await prompt('Enter a Site ID: ');
              const missionId = await prompt('Enter a Mission ID: ');
              const markers = await getMarkersAsync(missionsAPI, siteId, missionId);
              if (Array.isArray(markers)){
                console.log(`id, name, pile_id, marker_type, shape_type, density, offset, locked, use_extracted, description, known_surface_id, updated_at, updated_by`);
                for (let i = 0; i < markers.length; i++) {
                  let marker = markers[i];
                  console.log(`${marker["id"]}, ${marker["name"]}, ${marker["pileId"]}, ${marker["markerType"]}, ${marker["shapeType"]}, ${marker["density"]}, ${marker["offset"]}, ${marker["locked"]}, ${marker["useExtracted"]}, ${marker["description"]}, ${marker["knownSurfaceId"]}, ${marker["updatedAt"]}, ${marker["updatedBy"]}`);
                }
              }
            }
          break;
          case '5':
            {
              const siteId = await prompt('Enter a Site ID: ');
              const missionId = await prompt('Enter a Mission ID: ');
              const volumes = await getVolumesAsync(missionsAPI, siteId, missionId);
              if (Array.isArray(volumes)){
                console.log(`num,name,description,surface_desc,sku,surfaceArea,perimeter,cutVolume,fillVolume,threshold,offset,computedDensity,cutMass,fillMass,usesExtracted`);
                for (let i = 0; i < volumes.length; i++) {
                  let volume = volumes[i];
                  console.log(`${volume["num"]}, ${volume["name"]}, ${volume["description"]}, ${volume["surfaceDesc"]}, ${volume["sku"]}, ${volume["surfaceArea"]}, ${volume["perimeter"]}, ${volume["cutVolume"]}, ${volume["fillVolume"]}, ${volume["threshold"]}, ${volume["offset"]}, ${volume["computedDensity"]}, ${volume["cutMass"]}, ${volume["fillMass"]}, ${volume["usesExtracted"]}`);
                }
              }
            }
          break;
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
      continueLoop = await performOperation(operation, missionsAPI);
  }
};
  
async function authenticate(clientId, clientSecret) {
  // Instantiate the Authorization API client which will accept the client ID and secret and 
  // return a bearer token. The bearer token is used to access the Missions API.
  var authClient = ApplicationAuthorizationApi.ApiClient.instance;
  authClient.basePath = `${kespry_api_host}/api/auth`

  var basicAuth = authClient.authentications['basicAuth'];
  basicAuth.username = clientId; // 'qxApDjCVRY2MDluEr7PNSg'
  basicAuth.password = clientSecret; //'OXwkiT2pnHs33CgjB3ZEjQ0owTIqQg1tyyi3HDNUKsQ'

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

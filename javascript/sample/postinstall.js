const { execSync } = require('child_process');
const path = require('path');

const sdkAuthPath = path.join(__dirname, '..', 'sdk', 'auth');
const sdkMissionsPath = path.join(__dirname, '..', 'sdk', 'missions');
const sdkProductsPath = path.join(__dirname, '..', 'sdk', 'products');
const sdkKnownSurfacesPath = path.join(__dirname, '..', 'sdk', 'known-surfaces');
const sdkDownloadsPath = path.join(__dirname, '..', 'sdk', 'downloads');

try {
    console.log(`Installing auth SDK from ${sdkAuthPath}`);
    execSync('npm install', { cwd: sdkAuthPath, stdio: 'inherit' });
    
    console.log(`Installing missions SDK from ${sdkMissionsPath}`);
    execSync('npm install', { cwd:sdkMissionsPath, stdio: 'inherit' });
    
    console.log(`Installing products SDK from ${sdkProductsPath}`);
    execSync('npm install', { cwd:sdkProductsPath, stdio: 'inherit' });
    
    console.log(`Installing known-surfaces SDK from ${sdkKnownSurfacesPath}`);
    execSync('npm install', { cwd:sdkKnownSurfacesPath, stdio: 'inherit' });
    
    console.log(`Installing downloads SDK from ${sdkDownloadsPath}`);
    execSync('npm install', { cwd:sdkDownloadsPath, stdio: 'inherit' });

} catch (error) {
    console.error('Error during postinstall:', error.message);
    process.exit(1);
}

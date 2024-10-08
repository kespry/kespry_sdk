const { execSync } = require('child_process');
const path = require('path');

const sdkAuthPath = path.join(__dirname, '..', 'sdk', 'auth');
const sdkMissionsPath = path.join(__dirname, '..', 'sdk', 'missions');

try {
    console.log(`Installing auth SDK from ${sdkAuthPath}`);
    execSync('npm install', { cwd: sdkAuthPath, stdio: 'inherit' });
    
    console.log(`Installing missions SDK from ${sdkMissionsPath}`);
    execSync('npm install', { cwd:sdkMissionsPath, stdio: 'inherit' });

} catch (error) {
    console.error('Error during postinstall:', error.message);
    process.exit(1);
}

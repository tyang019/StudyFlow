const { execSync } = require('child_process');
try {
  const output = execSync("rg --files src -g '*.js'", { encoding: 'utf8' }).trim();
  if (output) {
    console.error('ERROR: .js files found in src:\n', output);
    process.exit(1);
  }
} catch (err) {
  // If rg finds nothing, it might throw an error/exit code 1 depending on setup.
  console.log('OK: No JS found');
}

const fs = require('fs');
const ini = require('ini');

const config = ini.parse(fs.readFileSync('./.git/config', 'utf-8'));
const args = process.argv.slice(2);

if (
  !(
    args.length &&
    config &&
    config.user &&
    config.user.email &&
    config.user.email.includes(args[0])
  )
) {
  console.log(`
  ==========
  Only ${args[0]} email allowed for commiting
  update your .git/config
  ==========
  `
  )
  return process.exit(1);
}

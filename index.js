const fs = require('fs');
const ini = require('ini');

const config = ini.parse(fs.readFileSync('./.git/config', 'utf-8'));
const args = process.argv.slice(2);

if (!args[0]) {
  console.log(`
  ==========
  Set your email pattern as the last script parameter.
  ==========
  `
  )
  return process.exit(1);
}

if (
  !(
    config &&
    config.user &&
    config.user.email &&
    config.user.email.includes(args[0])
  )
) {
  console.log(`
  ==========
  Only ${args[0]} email allowed for commiting

  you can set the email for this repository by using command:
  git config user.email "you@domain.com"
  ==========
  `
  )
  return process.exit(1);
}

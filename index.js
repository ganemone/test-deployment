// const getHandler = require('fusion-cli/serverless');

// module.exports = getHandler({
//   // dir: '.', // optional
//   // env: 'production', // optional
// });

const fs = require('fs');

module.exports = function(req, res) {
  console.log('CWD', process.cwd());
  console.log('__DIRNAME', __dirname);
  // const dirs = fs.readdirSync('.fusion/dist/production/server');
  // res.end('DIRS' + JSON.stringify(dirs));
  res.end('OK');
}
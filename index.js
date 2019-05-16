// const getHandler = require('fusion-cli/serverless');

// module.exports = getHandler({
//   // dir: '.', // optional
//   // env: 'production', // optional
// });

const fs = require('fs');

module.exports = function(req, res) {
  const dirs = fs.readdirSync('.fusion/');
  res.end('DIRS' + JSON.stringify(dirs));
}
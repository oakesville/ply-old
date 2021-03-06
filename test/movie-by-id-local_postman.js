'use strict';

const ply = require('../src/ply');

// testsLoc on file system allows synchronous reads
const testsLoc = '../../ply-demo/src/test/ply';
var requests = ply.loadRequests(testsLoc + '/requests/postman/movies-api.postman_collection.json');
var request = requests['Movie by ID'];
var values = Object.assign({}, ply.loadValues(testsLoc + '/values/global.postman_globals.json'),
      ply.loadValues(testsLoc + '/values/ply-ct.com.postman_environment.json'));

var options = {
  location: testsLoc,
  debug: true,
  responseHeaders: ['content-type']
};

request.run(options, values)
.then(response => {
  request.verify(values);
})
.catch(err => {
  console.log(err.message);
});
funcHandle = require("./help-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(html) {
  console.log(html.toString().toLowerCase());
};

funcHandle(requestOptions, printLowerCase);
funcHandle = require("./help-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {
  console.log(html.toString().toUpperCase());
};

funcHandle(requestOptions, printLowerCase);
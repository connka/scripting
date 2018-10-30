funcHandle = require("./help-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printLowerCase (html) {
  console.log(html.toString().split('').reverse().join(''));
};

funcHandle(requestOptions, printLowerCase);
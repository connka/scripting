var https = require("https");

module.exports = {getHTML, printHTML};

function getHTML (options, callback) {
  https.get(options, function(response) {
    var body = "";
    response.on("data", chunk => {
      body += chunk;
    });

    response.on("end", () => {
      callback(body);
    });
  });
}

function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
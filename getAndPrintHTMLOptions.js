var https = require("https");

module.exports = {getAndPrintHTML};

function getAndPrintHTML(options) {
  https.get(options, function(response) {
    var body = "";
    response.on("data", chunk => {
      body += chunk;
    });

    response.on("end", () => {
      console.log(body);
    });
  });
}


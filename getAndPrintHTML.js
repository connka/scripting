var https = require("https");

https.get("https://sytantris.github.io/http-examples/step2.html", function(response) {
if(response.statusCode !== 200) {
  console.log('Error status code ' + response.statusCode);
  return;
}

var body = '';
response.on('data', (chunk) => {
  body += chunk;
});

response.on('end', () => {
  console.log(body);
  
});
});

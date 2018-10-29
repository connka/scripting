var https = require("https");                             

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

https.get(requestOptions, function (response) {
    var body = '';
    response.on('data', (chunk) => {
      body += chunk;
    });
    
    response.on('end', () => {
      console.log(body);
      
    });

});
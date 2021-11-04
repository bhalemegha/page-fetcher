const request = require('request');
const fs = require("fs");

const pageDownloader = function(args) {
  const URL = args[0];
  const filePath = args[args.length - 1];

  request(URL, (error, response, body) => {
    fs.writeFile(filePath,(error + response + body), (error) => {
      if (error) {
        console.log("Failed to write to file");
        return;
      }else{
        console.log("downloaded and saved ", (error + response + body).length, " bytes to ", filePath);
      }
  });
  });
}
pageDownloader(process.argv.splice(2));
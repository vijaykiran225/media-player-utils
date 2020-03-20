// main.js
var mp = require("./mediaParser");

const libPath ="~/Music/OrganizedMusic/";


const lineReader = require('line-reader');

lineReader.eachLine('../samples/songsList.m3u', function(line) {
    mp.printData(line,libPath);
});

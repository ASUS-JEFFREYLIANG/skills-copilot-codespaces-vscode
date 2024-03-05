// Create web server
// 1. Load http module
var http = require('http');
var url = require('url');
var fs = require('fs');

// 2. Create server
http.createServer(function (req, res) {
    // 3. Parse the request containing file name
    var pathname = url.parse(req.url).pathname;

    // 4. Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (
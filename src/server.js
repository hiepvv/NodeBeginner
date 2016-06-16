var http = require('http')
var url = require('url')

function start (route, handle) {
    function onRequest (req, res) {
        var pathname = url.parse(req.url).pathname
        route(handle, pathname, res, req)
    }

    http.createServer(onRequest).listen(8080)
    console.log('Server listening on port 8080')
}

exports.start = start
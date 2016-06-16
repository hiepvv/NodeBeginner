function route (handle, pathname, res, req) {
    if (typeof(handle[pathname]) === 'function') {
        handle[pathname](res, req)
    } else {
        console.log('Request for ' + pathname + ' is cancelled')
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('404 not Found')
        res.end()
    }
}

exports.route = route
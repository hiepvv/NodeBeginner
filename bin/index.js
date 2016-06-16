var server = require('../src/server')
var router = require('../routing/router')
var reqHandlers = require('../src/requestHandlers')
var handle = {
    '/': reqHandlers.start,
    '/start': reqHandlers.start,
    '/upload': reqHandlers.upload,
    '/show': reqHandlers.show
}

server.start(router.route, handle)
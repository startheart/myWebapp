/**
 * @authors yanting (sgoddon@163.com)
 * @date    2015-07-23 12:03:24
 * @version $Id$
 */
var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + 'received');
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;

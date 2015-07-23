/**
 * @authors yanting (sgoddon@163.com)
 * @date    2015-07-23 12:04:37
 * @version $Id$
 */

function route(handle, pathname, response, request) {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] == 'function') {
        handle[pathname](response, request);
    } else {
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, {
            'Content-Type': 'text/html'
        });
        response.write('404 Not found');
        response.end();
    }
}

exports.route = route;

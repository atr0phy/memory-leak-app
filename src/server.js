const restify = require('restify');
const crypto = require('crypto');

const server = restify.createServer();
const leaked = [];

server.use(restify.plugins.queryParser());

server.get('/', (req, res, next) => {
    if (req.query.size) {
        crypto.randomBytes(Number(req.query.size), (err, buff) => {
            leaked.push(buff);
        });
    }

    res.send(process.memoryUsage());
    return next();
});

server.listen(3000, () => {
    console.log('%s listening at %s', server.name, server.url);
});
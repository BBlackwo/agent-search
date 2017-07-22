const server = require('server');
const { get } = server.router;
const { file } = server.reply;

const serverFolder = 'server';

// Configure routes
const routes = [
  get('/autosearch/agents', ({ req, res }) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);

    const folder = `${serverFolder}/routes/agents`;
    return file(`${folder}/${req.query.SearchTerm}.json`);
  })
];

// Start server
server({ port: 3000, public: `${serverFolder}/static` }, routes);

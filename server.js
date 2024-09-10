const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

// Routen-Umleitung einfügen (rewriter)
const routes = require('./data/routes.json');  // Pfad zur routes.json

server.db = router.db;

// Middleware verwenden
server.use(middlewares);

// Verwende die benutzerdefinierte Routen-Umleitung
server.use(jsonServer.rewriter(routes));

// JSON-Server-Auth verwenden
server.use(auth);

// Verwende den Router
server.use(router);

// Server auf Port 8000 starten
server.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});

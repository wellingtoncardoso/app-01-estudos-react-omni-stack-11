const express = require('express');

const PersonController = require('./controllers/PersonController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileControllers');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/session', SessionController.create);

//listagem
routes.get('/people', PersonController.index);
routes.get('/incidents', IncidentsController.index);
routes.get('/profile', ProfileController.index);
//cadastro
routes.post('/people', PersonController.create);
routes.post('/incidents', IncidentsController.create);

routes.delete('/incidents/:id', IncidentsController.delete);

//import archive from index
module.exports = routes;
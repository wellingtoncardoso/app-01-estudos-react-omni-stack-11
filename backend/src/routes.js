const express = require('express');

const PersonController = require('./controllers/PersonController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileControllers');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/people', PersonController.index);
routes.post('/people', PersonController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/sessions', SessionController.create);


//import archive from index
module.exports = routes;
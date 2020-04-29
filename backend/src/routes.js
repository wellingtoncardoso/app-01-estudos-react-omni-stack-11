const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const PersonController = require('./controllers/PersonController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileControllers');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//people
routes.get('/people', PersonController.index);
routes.post('/people',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(11).max(13),
        phone1: Joi.string().required().min(10).max(13),
        phone2: Joi.string().required().min(10).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}) , PersonController.create);

//profile
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({  
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

//incidents
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentController.create);

//delete
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//sessions
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().min(8),
    })
}), SessionController.create);

//import archive from index
module.exports = routes;
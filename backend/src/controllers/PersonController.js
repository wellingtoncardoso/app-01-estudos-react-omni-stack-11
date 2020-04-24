const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //listagem
    async index (request, response){
        const people = await connection('people').select('*');
        return response.json(people);
    },
    //cadastro
    async create(request, reponse){
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        //conn
        await connection('people').insert({
            id, 
            name, 
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
        }
};
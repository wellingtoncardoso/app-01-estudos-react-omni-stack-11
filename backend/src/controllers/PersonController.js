const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    //listagem
    async index (request, response){
        const people = await connection('people').select('*');
        return response.json(people);
    },
    //cadastro
    async create(request, response){
        const {name, email, whatsapp, phone1, phone2, city, uf} = request.body;
        const id = generateUniqueId();
        //conn
        await connection('people').insert({
            id, 
            name, 
            email,
            whatsapp,
            phone1,
            phone2,
            city,
            uf,
        })
        return response.json({ id });
        }
};
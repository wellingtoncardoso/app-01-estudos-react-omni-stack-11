const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;
        const person = await connection('people')
            .where('id', id)
            .select('name')
            .first();
        if(!person){
            return response.status(400).json({error: 'No Person found with this ID' });
        }
        return response.json(person);
    }
}
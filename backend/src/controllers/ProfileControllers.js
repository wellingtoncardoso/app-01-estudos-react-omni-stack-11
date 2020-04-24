const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const person_id = request.headers.authorization;
        const incidents = await connection('incidents')
            .where('person_id', person_id)
            .select('*');

        return response.json(incidents);
    }
}
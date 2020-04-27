const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        //pagination
        const {page = 1} = request.query;
        const [count] = await connection('incidents').count();
        console.log(count);
        const incidents = await connection('incidents')
            .join('people', 'people.id', '=', 'incidents.person_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 
                'people.name', 
                'people.email',
                'people.whatsapp',
                'people.phone1',
                'people.phone2',
                'people.city',
                'people.uf'
            ]);

        //number count
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },
    async create(request, response){
        const {title, description, value} = request.body;
        //header requesição
        const person_id = request.headers.authorization;

        const [id] = await connection ('incidents').insert({
            title,
            description,
            value,
            person_id,
        })
        return response.json({id});
    },
    async delete(request, response){
        const {id} = request.params;
        const person_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('person_id')
            .first();

            if(incident.person_id != person_id){
                return response.status(401).json({error: 'Operation not permitted.'});
            }

            await connection ('incidents').where('id', id).delete();

            return response.status(204).send();
    }
};
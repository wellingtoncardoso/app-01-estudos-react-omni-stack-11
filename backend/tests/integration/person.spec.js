
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('PERSON', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
        await connection.destroy();
    });

    it('should be able to create a new PERSON', async ()=>{
        const response = await request(app)
        .post('/people')
        //.set('Authorization', 'ID...') validation cases
        .send({
            name: "PaperYou3",
            email:"wellington@gmail.com",
            whatsapp:"19988775544",
            phone1:"1998874562",
            phone2:"1938542880",
            city:"Sumare",
            uf:"SP"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });   
});
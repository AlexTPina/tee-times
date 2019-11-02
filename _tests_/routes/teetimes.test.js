const request = require('supertest')
const { app } = require('../../server')
const knex = require('../../db/knex')

describe('the teetimes entity routes', () => {
    beforeEach(done => {
        return knex.migrate.rollback().then(() => {
            knex.migrate.latest().then(() => {
                knex.seed.run().then(() => {
                    done()
                })
            })
        })
    })

    // afterEach(done => {
    //     return knex.migrate.rollback().then(() => {
    //       done()
    //     })
    //   })    

    describe('get all teetimes', () => {
        it('should fetch all teetimes successfully', async () => {
            const res = await request(app).get('/teetimes')
            console.log(res.status)
            expect(res.status).toEqual(200)
        })
    })



})








// const request = require('supertest')
// const { app } = require('../../server')
// const knex = require('../../db/knex')


// describe('customer routes', () => {
//     beforeEach(done => {
//         return knex.migrate.rollback().then(() => {
//             knex.migrate.latest().then(() => {
//                 knex.seed.run().then(() => {
//                     done()
//                 })    
//             })
//         })
//     })

//     // afterEach(done => {
//     //     return knex.migrate.rollback().then(() => {
//     //         done()
//     //     })
//     // })

//     describe('get all customers', () => {
//         it('should get all the customers', async () => {
//             //no setup needed since we are grabbing all

//             //do work - make the call to the api/server/database
//             const res = await request(app).get('/customers')

//             //make assertions
//             expect(res.status).toEqual(200)
//             expect(res.body).toHaveLength(300)
//         })
//     })

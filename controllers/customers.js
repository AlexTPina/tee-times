
const knex = require('../db/knex')


exports.getAllCustomers = function (req, res) {
    knex('customers')
        .then(customers => res.json(customers))
}

exports.getOneCustomer = function (req, res) {
    knex('customers')
        .where('id', req.params.id)
        .then(customers => res.json(customers))
}

exports.addOneCustomer = function (req, res) {
    knex('customers')
        .insert(req.body)
        .returning('*')
    .then(newCustomer => res.json(newCustomer))
}

exports.updateOneCustomer = function (req, res) {
    knex('custoemrs')
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .where('id', req.params.id)
        .returning('*')
        .then(updatedCustomer => res.json(updatedCustomer))
}

exports.removeOneCustomer = function (req, res) {
    knex('customers')
        .del()
        .where('id, req.params.id')
        .returning('*')
        .then(newCustomer => res.json(newCustomer))
}

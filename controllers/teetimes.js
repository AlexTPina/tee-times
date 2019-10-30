const knex = require('../db/knex')

exports.getAllTeetimes = function (req, res) {
    knex('teetimes')
        .then(teetimes => res.json(teetimes))
}

exports.getOneTeetime = function (req, res) {
    knex('teetimes')
        .where('id', req.params.id)
        .then(teetimes => res.json(teetimes))
}

exports.addOneTeetime = function (req, res) {
    knex('teetimes')
        .insert(req.body)
        .returning('*')
        .then(newTeetimes => res.json(newTeetimes))
}

exports.updateOneTeetime = function (req, res) {
    knex('teetimes') 
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .where('id', req.params.id)
        .returning('*')
    .then(updatedTeetime => res.json(updatedTeetime))
}

exports.removeOneTeetime = function (req, res) {
    knex('teetimes')
        .del()
        .where('id, req.params.id')
        .returning('*')
    .then(newTeetime => res.json(newTeetime))
}

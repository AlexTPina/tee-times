const express = require('express');
const router = express.Router();
const teetimesController = require('../controllers/teetimes');

/* GET All TeeTimes */
router.get('/', teetimesController.getAllTeetimes)
router.get('/:id', teetimesController.getOneTeetime)
router.post('/', teetimesController.addOneAppointment)
router.patch('/:id', teetimesController.updateOneAppointment)
router.delete('/:id', teetimesController.removeOneAppointment)

module.exports = router;

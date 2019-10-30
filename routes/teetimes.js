const express = require('express');
const router = express.Router();
const teetimesController = require('../controllers/teetimes');

/* GET All TeeTimes */
router.get('/', teetimesController.getAllTeetimes)
router.get('/:id', teetimesController.getOneTeetime)
router.post('/', teetimesController.addOneTeetime)
router.patch('/:id', teetimesController.updateOneTeetime)
router.delete('/:id', teetimesController.removeOneTeetime)

module.exports = router;

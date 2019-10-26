const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers');

/* GET All Customers */
router.get('/', customersController.getAllCustomers)
router.get('/:id', customersController.getOneCustomer)
router.post('/', customersController.addOneCustomer)
router.patch('/:id', customersController.updateOneCustomer)
router.delete('/:id', customersController.removeOneCustomer)

module.exports = router;

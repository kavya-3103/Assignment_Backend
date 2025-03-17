const express = require('express');
const router = express.Router();

const additionController = require('../controllers/additionController');
const factorialController = require('../controllers/factorialController');
const fibonacciController = require('../controllers/fibonacciController');
const primeController = require('../controllers/primeController');
const powerController = require('../controllers/powerController');
const updateDeleteController = require('../controllers/updatedeletecontroller');
const operationListController = require('../controllers/operationlistcontroller'); // New controller



// Map routes to controllers
router.post('/addition', additionController.calculateAddition);
router.get('/factorial/:number', factorialController.calculateFactorial);
router.get('/fibonacci/:count', fibonacciController.calculateFibonacci);
router.get('/prime/:number', primeController.checkPrime);
router.post('/power', powerController.calculatePower);
router.get('/calculations', operationListController.getOperations);


// Generic Update and Delete endpoints
router.put('/operation/:id', updateDeleteController.updateOperation);
router.delete('/operation/:id', updateDeleteController.deleteOperation);

//router.get('/calculations', calculationController.getCalculations);

module.exports = router;

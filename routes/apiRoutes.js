const express = require('express');
const router = express.Router();

const additionController = require('../controllers/additionController');
const factorialController = require('../controllers/factorialController');
const fibonacciController = require('../controllers/fibonacciController');
const primeController = require('../controllers/primeController');
const powerController = require('../controllers/powerController');
//const calculationController = require('../controllers/calculationController');

// Map routes to controllers
router.post('/addition', additionController.calculateAddition);
router.get('/factorial/:number', factorialController.calculateFactorial);
router.get('/fibonacci/:count', fibonacciController.calculateFibonacci);
router.get('/prime/:number', primeController.checkPrime);
router.post('/power', powerController.calculatePower);
//router.get('/calculations', calculationController.getCalculations);

module.exports = router;

var express = require('express');
var router = express.Router();
var employeeService =  require('../services/employeeService')
/* GET employees listing. */
router.get('/', employeeService.getAll);
router.post('/', employeeService.save)

module.exports = router;

var express = require('express');
var router = express.Router();
var employeeService =  require('../services/employeeService')
/* GET employees listing. */
router.get('/', function(req, res, next) {
    return res.json(employeeService.getAll())
});
// router.get('/:id', employeeService.ge)

router.post('/', function(req, res, next) {
    var newEmployee = req.body;
    return res.json(employeeService.save(newEmployee));
})
router.delete('')

module.exports = router;

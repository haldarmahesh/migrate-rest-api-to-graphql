const express = require('express');

const router = express.Router();
const employeeService = require('../service/employeeService');
/* GET /employees - get list of all employees. */
router.get('/', (req, res) => res.json(employeeService.getAll()));

/* GET /employees/:id - get employee by employeeId */
router.get('/:id', (req, res) => {
  const employeeId = req.params.id;
  return res.json(employeeService.getById(employeeId));
});

/* POST /employees - create a new employee and add in db */
router.post('/', (req, res) => {
  const newEmployee = req.body;
  return res.json(employeeService.save(newEmployee));
});

/* DELETE /employees/:id - delete an existing employee with id */
router.delete('/:id', (req, res) => {
  const employeeId = req.params.id;
  return res.json(employeeService.getById(employeeId)); // todo convert to do
});

module.exports = router;

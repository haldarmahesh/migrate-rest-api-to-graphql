const express = require('express');

const router = express.Router();
const employeeService = require('../services/employeeService');
/* GET employees listing. */
router.get('/', (req, res) => res.json(employeeService.getAll()));
// router.get('/:id', employeeService.ge)

router.post('/', (req, res) => {
  const newEmployee = req.body;
  return res.json(employeeService.save(newEmployee));
});
router.delete('');

module.exports = router;

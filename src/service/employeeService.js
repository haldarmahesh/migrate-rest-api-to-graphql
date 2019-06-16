const employeeRepository = require('../repository/employeesRepository');
// get all the employees
function getAll() {
  return employeeRepository.getAll();
}

// save a new employee
function save(newEmployee) {
  return employeeRepository.save(newEmployee);
}

// get employee by id
function getById(employeeId) {
  return employeeRepository.getById(employeeId);
}

// delete employee by id
function deleteById(employeeId) {
  return employeeRepository.deleteById(parseInt(employeeId, 10));
}

module.exports = {
  getAll,
  getById,
  save,
  deleteById,
};

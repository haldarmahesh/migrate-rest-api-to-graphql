const employeeRepository = require('../repository/employeesRepository');

function getAll() {
  return employeeRepository.getAll();
}
function save(newEmployee) {
  return employeeRepository.save(newEmployee);
}
function getById(employeeId) {
  return employeeRepository.getById(employeeId);
}

module.exports = {
  getAll,
  getById,
  save,
};

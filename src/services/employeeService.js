const employeeRepository = require('../repository/employees');

function getAll() {
  return employeeRepository.getAll();
}
function save(newEmployee) {
  return employeeRepository.save(newEmployee);
}

module.exports = {
  getAll,
  save,
};

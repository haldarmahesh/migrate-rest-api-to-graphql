let employeesData = [{
  id: 'EMP_1',
  name: 'Mahesh',
  department: 'IT',
}];
function validateEmployee(employee) {
  if (!(employee.name && employee.department)) {
    throw new Error('Employee Name and department is required');
  }
}
// get all employee
function getAll() {
  return employeesData;
}
// save a new employee
function save(employee) {
  validateEmployee(employee);
  const newEmployee = employee;
  newEmployee.id = `EMP_${employeesData.length + 1}`;
  employeesData.push(employee);
  return employee;
}

// get employee by id
function getById(employeeId) {
  const employee = employeesData.filter(item => item.id === employeeId);
  if (employee.length === 0) {
    throw new Error(`Employee Resource with id: ${employeeId} not found`);
  }
  return employee;
}

// delete employee by id
function deleteById(employeeId) {
  const employee = employeesData.filter(item => item.id === employeeId);
  if (employee.length === 0) {
    throw new Error(`Employee Resource with id: ${employeeId} not found`);
  }
  employeesData = employeesData.filter(item => item.id !== employeeId);
  return employeeId;
}

module.exports = {
  getAll,
  save,
  getById,
  deleteById,
};

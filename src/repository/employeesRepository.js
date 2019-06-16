const employeesData = [{
  id: 'EMP_1',
  name: 'Mahesh',
  department: 'IT',
}];
function validateEmployee(employee) {
  if (!(employee.name && employee.department)) {
    throw new Error('Employee Name and department is required');
  }
}
function getAll() {
  return employeesData;
}
function save(employee) {
  validateEmployee(employee);
  const newEmployee = employee;
  newEmployee.id = `EMP_${employeesData.length + 1}`;
  employeesData.push(employee);
  return employee;
}
function getById(employeeId) {
  const employee = employeesData.filter(item => item.id === employeeId);
  if (employee.length === 0) {
    throw new Error(`Employee Resource with id: ${employeeId} not found`);
  }
  return employee;
}

module.exports = {
  getAll,
  save,
  getById,
};

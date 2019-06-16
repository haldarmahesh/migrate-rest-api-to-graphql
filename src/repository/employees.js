const employeesData = [{
  id: 'EMP_1',
  name: 'Mahesh',
  department: 'IT',
}];

function getAll() {
  return employeesData;
}
function save(employee) {
  const newEmployee = employee;
  newEmployee.id = `EMP_${employeesData.length + 1}`;
  employeesData.push(employee);
  return employee;
}

module.exports = {
  getAll,
  save,
};

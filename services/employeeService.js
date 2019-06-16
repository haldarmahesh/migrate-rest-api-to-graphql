var employeeRepository = require('../repository/employees');
function getAll(req, res, next) {
    return res.json(employeeRepository.getAll());
}
function save(req, res, next) {
    var newEmployee = req.body;
    return res.json(employeeRepository.save(newEmployee));
}

module.exports = {
    getAll,
    save
}

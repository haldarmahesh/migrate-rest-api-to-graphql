# Example to migrate from REST API to GraphQL

## Awesome company service
This services contains APIs to provide employees info and adding new employees.

## REST APIs to migrate
* `GET /api/employees` : This returns the list of all the employees
* `GET /api/employees/:id`: This returns the employee which has id
* `POST /api/employees`: This creates a new employee with details in request body
* `DELETE /api/employees/:id`: This deletes an employee which has id

## Info
The base app structure is generated using express generator.

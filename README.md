# Example to migrate from REST API to GraphQL
This repo is the code base repository for the the blog post [Migrating Existing REST APIs to GraphQL](https://blog.bitsrc.io/migrating-existing-rest-apis-to-graphql-2c5de3db647d).

If you want to know what is exactly is GraphQL, refer [this post](https://blog.bitsrc.io/what-the-duck-is-graphql-6644ec6cbae9).

## Awesome company service
This services contains APIs to provide employees info and adding new employees.

Check this [pull request](https://github.com/haldarmahesh/migrate-rest-api-to-graphql/pull/2/files), which shows the effort needed to migrate REST to GraphQL APIs.

## REST APIs to migrate
* `GET /api/employees`  This returns the list of all the employees
* `GET /api/employees/:id` This returns the employee which has id
* `POST /api/employees` This creates a new employee with details in request body
* `DELETE /api/employees/:id` This deletes an employee which has id

## Info
The base app structure is generated using express generator. 

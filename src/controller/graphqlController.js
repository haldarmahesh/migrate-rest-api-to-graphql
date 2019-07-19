
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const employeesService = require('../service/employeeService');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    employee(id: Int!): Employee
    employees: [Employee],
  }
  type Mutation {
      createEmployee(name: String!, department: String!): Employee,
      deleteEmployee(id: Int!): DeleteEmployeeResponse
  }
  input EmployeeInput {
      name: String!,
      department: String!
  }
  type DeleteEmployeeResponse {
    id: Int!
  }
  type Employee {
    id: Int!,
    name: String!,
    department: String!
  }
`);

const root = {
  employee: graphqlInput => employeesService.getById(graphqlInput && graphqlInput.id),
  employees: employeesService.getAll(),
  createEmployee: graphqlInput => employeesService.save(graphqlInput),
  deleteEmployee: graphqlInput => employeesService.deleteById(graphqlInput.id),
};

const graphql = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphql;

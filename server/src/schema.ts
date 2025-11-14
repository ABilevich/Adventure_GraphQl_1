import { buildSchema } from 'graphql';

const schema = buildSchema(`
  schema { 
    query: Query
    mutation: Mutation
  }

  type Query { 
    hello: String
    users: [User]
  } 

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  
  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Mutation { 
    createUser(input: CreateUserInput): User
  }
  
`);

const root = {
  hello: () => {
    return 'Hello from GraphQL!';
  },
  users: () => {
    return [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: '',
      },
    ];
  },
};

export { schema, root };

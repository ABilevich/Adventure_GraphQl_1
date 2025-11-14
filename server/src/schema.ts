import { buildSchema } from 'graphql';

const schema = buildSchema(`type Query { hello: String } `);

const root = {
  hello: () => {
    return 'Hello from GraphQL!';
  },
};

export { schema, root };

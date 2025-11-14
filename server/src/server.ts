import express from 'express';
import cors from 'cors';
import config from './config/config.js';
import { schema, root } from './schema.js';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';

var corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
const PORT = config.port;

// Bllow is the regualr rest / route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// 1. Setup ruru HTML landing page at the root route
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

// 2. Handle the GraphQL execution for all methods (POST, and GET with query params)
app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root,
  }),
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`GraphQL endpoint available at http://localhost:${PORT}/graphql`);
});

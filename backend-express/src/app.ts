import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import environment from './environment';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const app = express();

mongoose
  .connect(environment.mongodb_uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

const server = new ApolloServer({
  typeDefs: [
    typeDefs.Query,
    typeDefs.Project,
  ],
  resolvers: [
    resolvers.project,
  ],
});

server.applyMiddleware({
  app,
  path: '/',
});
export default app;

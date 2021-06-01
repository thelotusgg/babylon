import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { CategoryDataSource, PhraseDataSource, ProjectDataSource } from './dataSources';
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
    typeDefs.Category,
    typeDefs.Comment,
    typeDefs.Language,
    typeDefs.MultiligualText,
    typeDefs.Phrase,
    typeDefs.Project,
    typeDefs.Query,
    typeDefs.User,
  ],
  resolvers: [
    resolvers.category,
    // resolvers.phrase,
    resolvers.project,
    // resolvers.user,
  ],
  dataSources: () => ({
    category: new CategoryDataSource(),
    phrase: new PhraseDataSource(),
    project: new ProjectDataSource(),
  }),
});

server.applyMiddleware({
  app,
  path: '/',
});
export default app;

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import environment from './environment';
import {
  CategoryDataSource,
  PhraseDataSource,
  ProjectDataSource,
  TranslationDataSource,
} from './dataSources';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const app = express();

mongoose
  .connect(environment.mongodb_uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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
    typeDefs.Mutation,
    typeDefs.Phrase,
    typeDefs.Project,
    typeDefs.Query,
    typeDefs.User,
  ],
  resolvers: [
    resolvers.category,
    resolvers.language,
    resolvers.phrase,
    resolvers.project,
    // resolvers.user,
    // resolvers.proposal,
    resolvers.translation,
  ],
  dataSources: () => ({
    category: new CategoryDataSource(),
    phrase: new PhraseDataSource(),
    project: new ProjectDataSource(),
    translation: new TranslationDataSource(),
  }),
});

server.applyMiddleware({
  app,
  path: '/',
});
export default app;

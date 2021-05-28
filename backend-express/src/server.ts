import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

export default new ApolloServer({
  typeDefs: [
    typeDefs.Query,
    typeDefs.Project,
  ],
  resolvers: [
    resolvers.project,
  ],
});

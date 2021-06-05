/* eslint-disable max-len, no-underscore-dangle */

export default {
  Mutation: {
    createPhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.create(input),
    deletePhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.delete(input),
    updatePhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.update(input),
  },
  Query: {
    phrase: (_: any, { _id }: any, { dataSources: { phrase } }: any) => phrase.get(_id),
  },
};

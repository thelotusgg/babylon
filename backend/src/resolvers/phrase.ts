/* eslint-disable max-len, no-underscore-dangle */

export default {
  Phrase: {
    translation: async (parent: any, { _id }: any, { dataSources: { translation } }: any) => translation.getByPhraseAndId(parent._id, _id),
    translations: async (parent: any, __: any, { dataSources: { translation } }: any) => translation.getByPhrase(parent._id),
  },
  Mutation: {
    createPhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.create(input),
    deletePhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.delete(input),
    updatePhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.update(input),
  },
  Query: {
    phrase: (_: any, { _id }: any, { dataSources: { phrase } }: any) => phrase.get(_id),
  },
};

/* eslint-disable max-len, no-underscore-dangle */

export default {
  Translation: {
    proposal: async (parent: any, { _id }: any, { dataSources: { proposal } }: any) => proposal.getByTranslationAndId(parent._id, _id),
    proposals: async (parent: any, __: any, { dataSources: { proposal } }: any) => proposal.getByTranslation(parent._id),
  },
  Mutation: {
    createTranslation: (_: any, { input }: any, { dataSources: { translation } }: any) => translation.create(input),
    deleteTranslation: (_: any, { input }: any, { dataSources: { translation } }: any) => translation.delete(input),
    updateTranslation: (_: any, { input }: any, { dataSources: { translation } }: any) => translation.update(input),
  },
  Query: {
    translation: (_: any, { _id }: any, { dataSources: { translation } }: any) => translation.get(_id),
  },
};

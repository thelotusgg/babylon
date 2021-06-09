/* eslint-disable max-len, no-underscore-dangle */

export default {
  Mutation: {
    createTranslation: (_: any, { input }: any, { dataSources: { translation } }: any) => translation.create(input),
    deleteTranslation: (_: any, { input }: any, { dataSources: { translation } }: any) => translation.delete(input),
    updateTranslation: (_: any, { input }: any, { dataSources: { translation } }: any) => translation.update(input),
  },
  Query: {
    translation: (_: any, { _id }: any, { dataSources: { translation } }: any) => translation.get(_id),
  },
};

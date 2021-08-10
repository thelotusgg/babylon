/* eslint-disable max-len, no-underscore-dangle */

export default {
  Mutation: {
    createProposal: (_: any, { input }: any, { dataSources: { proposal } }: any) => proposal.create(input),
    deleteProposal: (_: any, { input }: any, { dataSources: { proposal } }: any) => proposal.delete(input),
    updateProposal: (_: any, { input }: any, { dataSources: { proposal } }: any) => proposal.update(input),
  },
  Query: {
    proposal: (_: any, { _id }: any, { dataSources: { proposal } }: any) => proposal.get(_id),
  },
};

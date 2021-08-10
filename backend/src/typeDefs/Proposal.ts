import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    proposal(_id: ID!): Proposal
  }

  extend type Mutation {
    createProposal(input: CreateProposalInput!): Proposal
    deleteProposal(input: DeleteProposalInput!): Proposal
    updateProposal(input: UpdateProposalInput!): Proposal
  }

  input CreateProposalInput {
    value: String!
    translation: String!
  }

  input DeleteProposalInput {
    _id: ID!
  }

  input UpdateProposalInput {
    _id: ID!
    value: String
  }

  type Proposal {
    _id: ID!
    value: String!
    user: User!
    comments: [Comment]
  }
`;

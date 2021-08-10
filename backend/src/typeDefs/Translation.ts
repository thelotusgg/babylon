import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    translation(_id: ID!): Translation
  }

  extend type Mutation {
    createTranslation(input: CreateTranslationInput!): Translation
    deleteTranslation(input: DeleteTranslationInput!): Translation
    updateTranslation(input: UpdateTranslationInput!): Translation
  }

  input CreateTranslationInput {
    languageCode: String!
    value: String
    phrase: String!
  }

  input DeleteTranslationInput {
    _id: ID!
  }

  input UpdateTranslationInput {
    _id: ID!
    languageCode: String
    value: String
  }

  type Translation {
    _id: ID!
    languageCode: String
    value: String
    proposal(_id: ID!): Proposal
    proposals: [Proposal]
    comments: [Comment]
  }
`;

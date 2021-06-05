import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    phrase(_id: ID!): Phrase
  }

  extend type Mutation {
    createPhrase(input: CreatePhraseInput!): Phrase
    deletePhrase(input: DeletePhraseInput!): Phrase
    updatePhrase(input: UpdatePhraseInput!): Phrase
  }

  input CreatePhraseInput {
    key: String!
    project: String!
  }

  input DeletePhraseInput {
    _id: ID!
  }

  input UpdatePhraseInput {
    _id: ID!
    key: String!
    project: String!
  }

  type Phrase {
    _id: ID!
    key: String!
    translations: [Translation]
    comments: [Comment]
  }

  type Translation {
    languageCode: String
    value: String
    proposals: [Proposal]
    comments: [Comment]
  }

  type Proposal {
    value: String
    user: User!
    comments: [Comment]
  }
`;

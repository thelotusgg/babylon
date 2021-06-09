import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    phrase(_id: ID!): Phrase
    translation(_id: ID!): Translation
  }

  extend type Mutation {
    createPhrase(input: CreatePhraseInput!): Phrase
    deletePhrase(input: DeletePhraseInput!): Phrase
    updatePhrase(input: UpdatePhraseInput!): Phrase
    
    createTranslation(input: CreateTranslationInput!): Translation
    deleteTranslation(input: DeleteTranslationInput!): Translation
    updateTranslation(input: UpdateTranslationInput!): Translation
    
    createProposal(input: CreateProposalInput!): Proposal
    deleteProposal(input: DeleteProposalInput!): Proposal
    updateProposal(input: UpdateProposalInput!): Proposal
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
    key: String
    project: String
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

  type Phrase {
    _id: ID!
    key: String!
    translation(languageCode: String, fallback: Boolean = true): Translation
    translations: [Translation]
    comments: [Comment]
  }

  type Translation {
    _id: ID!
    languageCode: String
    value: String
    proposals: [Proposal]
    comments: [Comment]
  }

  type Proposal {
    _id: ID!
    value: String!
    user: User!
    comments: [Comment]
  }
`;

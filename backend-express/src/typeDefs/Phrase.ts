import { gql } from 'apollo-server-express';

export default gql`
  extend type Project {
    phrase(_id: ID!): Phrase
    phrases: [Phrase]
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

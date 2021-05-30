import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    project(_id: ID!): Project
    projects: [Project]
  }

  type Project {
    _id: ID!
    titles: [MultiligualText]
    descriptions: [MultiligualText]
    languages: [Language]
    phrase(_id: ID!): Phrase
    phrases: [Phrase]
    category: Category!
  }
`;

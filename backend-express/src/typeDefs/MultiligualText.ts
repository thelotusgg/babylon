import { gql } from 'apollo-server-express';

export default gql`
  input MultiligualTextInput {
    languageCode: String!
    value: String!
  }

  type MultiligualText {
    _id: ID!
    languageCode: String!
    value: String!
  }
`;

import { gql } from 'apollo-server-express';

export default gql`
  type MultiligualText {
    languageCode: String!
    value: String!
  }
`;

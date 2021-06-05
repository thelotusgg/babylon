import { gql } from 'apollo-server-express';

export default gql`
  type Language {
    code: String!
    countryCode: String!
  }

  type LanguageInput {
    code: String!
    countryCode: String!
  }
`;

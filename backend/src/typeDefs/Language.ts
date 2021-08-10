import { gql } from 'apollo-server-express';

export default gql`
  type Language {
    code: String!
    countryCode: String!
  }

  input LanguageInput {
    code: String!
    countryCode: String!
  }
`;

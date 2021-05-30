import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    category(_id: ID!): Category
    categories: [Category]
  }

  type Category {
    _id: ID!
    title(languageCode: String, fallback: Boolean = true): MultiligualText
    titles: [MultiligualText]
    description(languageCode: String, fallback: Boolean = true): MultiligualText
    descriptions: [MultiligualText]
    parent: Category
    children: [Category]
    projects: [Project]
  }
`;

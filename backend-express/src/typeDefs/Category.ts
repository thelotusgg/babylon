import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    category(_id: ID!): Category
    categories: [Category]
  }

  type Category {
    _id: ID!
    title: [MultiligualText]
    description: [MultiligualText]
    parent: Category
  }
`;

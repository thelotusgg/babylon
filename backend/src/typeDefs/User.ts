import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    user(_id: ID!): User
    users: [User]
  }

  type User {
    _id: ID!
  }
`;

import { gql } from 'apollo-server-express';

export default gql`
  type Comment {
    value: String!
    user: User!
    replies: [CommentReply]
  }

  type CommentReply {
    value: String!
    user: User!
  }
`;

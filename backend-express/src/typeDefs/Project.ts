import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        project: [Project]
    }

    type Project {
        _id: ID!
        name: String!
    }
`
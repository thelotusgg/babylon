import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    project(_id: ID!): Project
    projects: [Project]
  }

  extend type Mutation {
    createProject(input: CreateProjectInput!): Project
    deleteProject(input: DeleteProjectInput!): Project
    deleteProjectDescription(input: DeleteProjectDescriptionInput!): Project
    deleteProjectTitle(input: DeleteProjectTitleInput!): Project
    updateProject(input: UpdateProjectInput!): Project
  }

  input CreateProjectInput {
    titles: [MultiligualTextInput!]!
    descriptions: [MultiligualTextInput]
    languages: [LanguageInput]
    category: String!,
  }

  input DeleteProjectInput {
    _id: ID!
  }

  input DeleteProjectDescriptionInput {
    _id: ID!
    description: ID!
  }

  input DeleteProjectTitleInput {
    _id: ID!
    title: ID!
  }

  input UpdateProjectInput {
    _id: ID!
    titles: [MultiligualTextInput]
    descriptions: [MultiligualTextInput]
    languages: [LanguageInput]
    category: String,
  }

  type Project {
    _id: ID!
    title(languageCode: String, fallback: Boolean = true): MultiligualText
    titles: [MultiligualText]
    description(languageCode: String, fallback: Boolean = true): MultiligualText
    descriptions: [MultiligualText]
    languages: [Language]
    phrase(_id: ID!): Phrase
    phrases: [Phrase]
    category: Category!
  }
`;

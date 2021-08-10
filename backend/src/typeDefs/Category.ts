import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    category(_id: ID!): Category
    categories(rootOnly: Boolean = false): [Category]
  }

  extend type Mutation {
    createCategory(input: CreateCategoryInput!): Category
    deleteCategory(input: DeleteCategoryInput!): Category
    deleteCategoryDescription(input: DeleteCategoryDescriptionInput!): Category
    deleteCategoryTitle(input: DeleteCategoryTitleInput!): Category
    updateCategory(input: UpdateCategoryInput!): Category
  }

  input CreateCategoryInput {
    titles: [MultiligualTextInput]
    descriptions: [MultiligualTextInput]
    parent: String,
  }

  input DeleteCategoryInput {
    _id: ID!
  }

  input DeleteCategoryDescriptionInput {
    _id: ID!
    description: ID!
  }

  input DeleteCategoryTitleInput {
    _id: ID!
    title: ID!
  }

  input UpdateCategoryInput {
    _id: ID!
    titles: [MultiligualTextInput]
    descriptions: [MultiligualTextInput]
    parent: String,
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

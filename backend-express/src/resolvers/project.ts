/* eslint-disable max-len, no-underscore-dangle */
import { getMultiligualTextResolver } from '../utils';

export default {
  Project: {
    category: (parent: any, __: any, { dataSources: { category } }: any) => category.get(parent.category),
    description: async (parent: any, { languageCode, fallback }: any, context: any) => getMultiligualTextResolver(parent.descriptions, languageCode, fallback, context),
    title: async (parent: any, { languageCode, fallback }: any, context: any) => getMultiligualTextResolver(parent.titles, languageCode, fallback, context),
    phrase: async (parent: any, { _id }: any, { dataSources: { phrase } }: any) => phrase.getByProjectAndId(parent._id, _id),
    phrases: async (parent: any, __: any, { dataSources: { phrase } }: any) => phrase.getByProject(parent._id),
  },
  Mutation: {
    createProject: (_: any, { input }: any, { dataSources: { project } }: any) => project.create(input),
    deleteProject: (_: any, { input }: any, { dataSources: { project } }: any) => project.delete(input),
    updateProject: (_: any, { input }: any, { dataSources: { project } }: any) => project.update(input),
  },
  Query: {
    projects: async (_: any, __: any, { dataSources: { project } }: any) => project.getAll(),
    project: (_: any, { _id }: any, { dataSources: { project } }: any) => project.get(_id),
  },
};

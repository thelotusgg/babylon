/* eslint-disable max-len, no-underscore-dangle */
import { getMultiligualTextResolver } from '../utils';

export default {
  Category: {
    children: (parent: any, __: any, { dataSources: { category } }: any) => category.getByParent(parent._id),
    description: async (parent: any, { languageCode, fallback }: any, context: any) => getMultiligualTextResolver(parent.descriptions, languageCode, fallback, context),
    parent: (parent: any, __: any, { dataSources: { category } }: any) => category.get(parent.parent),
    title: async (parent: any, { languageCode, fallback }: any, context: any) => getMultiligualTextResolver(parent.titles, languageCode, fallback, context),
    projects: async (parent: any, __: any, { dataSources: { project } }: any) => project.getByCategory(parent._id),
  },
  Query: {
    categories: async (_: any, __: any, { dataSources: { category } }: any) => category.getAll(),
    category: (_: any, { _id }: any, { dataSources: { category } }: any) => category.get(_id),
  },
};

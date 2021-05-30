import { getMultiligualText } from '../utils';

export default {
  Category: {
    children: (parent: any, __: any, { dataSources: { category } }: any) => {
      // eslint-disable-next-line no-underscore-dangle
      const children = category.getByParent(parent._id);
      return children;
    },
    description: async (parent: any, { languageCode, fallback }: any, context: any) => {
      let multiligualTextLanguageCode = languageCode;

      // check if language is set and if not set language by context
      if (!languageCode && context.languageCode) {
        multiligualTextLanguageCode = context.languageCode;
      }

      return getMultiligualText(
        parent.descriptions,
        multiligualTextLanguageCode,
        fallback,
      );
    },
    // eslint-disable-next-line max-len
    parent: (parent: any, __: any, { dataSources: { category } }: any) => category.get(parent.parent),
    title: async (parent: any, { languageCode, fallback }: any, context: any) => {
      let multiligualTextLanguageCode = languageCode;

      // check if language is set and if not set language by context
      if (!languageCode && context.languageCode) {
        multiligualTextLanguageCode = context.languageCode;
      }

      return getMultiligualText(
        parent.titles,
        multiligualTextLanguageCode,
        fallback,
      );
    },
    // eslint-disable-next-line max-len, no-underscore-dangle
    projects: async (parent: any, __: any, { dataSources: { project } }: any) => project.getByCategory(parent._id),
  },
  Query: {
    categories: async (_: any, __: any, { dataSources: { category } }: any) => category.getAll(),
    category: (_: any, { _id }: any, { dataSources: { category } }: any) => category.get(_id),
  },
};

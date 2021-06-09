/* eslint-disable max-len, no-underscore-dangle */

export default {
  Phrase: {
    translation: async (parent: any, { languageCode, fallback }: any, context: any) => {
      if (!parent.translations) return null;

      // check if language is set and if not set language by context
      let translationLanguageCode = languageCode;
      if (!languageCode && context.languageCode) {
        translationLanguageCode = context.languageCode;
      }

      // find translation
      let translationResult = parent.translations.find(
        (translation: { languageCode: any; }): any => translation.languageCode === translationLanguageCode,
      );

      // check if fallback translation is required
      if (!translationResult && fallback) {
        translationResult = parent.translations.find(
          (translation: { languageCode: any; }): any => translation.languageCode === 'en-GB',
        );
      }

      return translationResult;
    },
  },
  Mutation: {
    createPhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.create(input),
    deletePhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.delete(input),
    updatePhrase: (_: any, { input }: any, { dataSources: { phrase } }: any) => phrase.update(input),
  },
  Query: {
    phrase: (_: any, { _id }: any, { dataSources: { phrase } }: any) => phrase.get(_id),
  },
};

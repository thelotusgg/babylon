import DataLoader from 'dataloader';
import { Phrase } from '../models';

// eslint-disable-next-line max-len
const translationLoader = new DataLoader(async (translationIds) => {
  const phrases = await Phrase.find({
    translations: {
      $elemMatch: {
        _id: { $in: translationIds },
      },
    },
  },
  { 'translations.$': 1 }).exec();

  let result: any[] = [];
  phrases.forEach((phrase: { translations: any; }) => {
    result = result.concat(phrase.translations);
  });

  return result;
});

export default translationLoader;

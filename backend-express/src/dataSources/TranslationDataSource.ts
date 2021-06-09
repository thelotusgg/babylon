import { translationLoader } from '../dataLoaders';
import { Phrase } from '../models';
import AbstractMongooseDataSource from './AbstractMongooseDataSource';

export default class TranslationDataSource extends AbstractMongooseDataSource {
  constructor() {
    super();
    this.model = Phrase;
    this.dataLoader = translationLoader;
  }

  async create(input: any) {
    // eslint-disable-next-line no-underscore-dangle
    if (!input.phrase) return null;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { phrase, ...rest } = input;

    const phraseObj = await this.model.findOneAndUpdate({
      _id: phrase,
      'translations.languageCode': {
        $ne: rest.languageCode,
      },
    }, {
      $push: {
        translations: rest,
      },
    }, { new: true }).exec();

    return (phraseObj ? phraseObj.translations[phraseObj.translations.length - 1] : null);
  }
}

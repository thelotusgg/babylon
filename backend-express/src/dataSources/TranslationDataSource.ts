import { DataSource } from 'apollo-datasource';
import { translationLoader } from '../dataLoaders';
import { Phrase } from '../models';

export default class TranslationDataSource extends DataSource {
  model: any;

  dataLoader: any;

  constructor() {
    super();
    this.model = Phrase;
    this.dataLoader = translationLoader;
  }

  async getWithParent(objectId: string): Promise<[any, any]|[null, null]> {
    if (!objectId) return [null, null];

    const phraseObj = await this.model.findOne({
      translations: {
        $elemMatch: {
          _id: objectId,
        },
      },
    });

    if (!phraseObj) return [null, null];
    return [phraseObj, phraseObj.translations.id(objectId)];
  }

  async get(objectId: string) {
    if (!objectId) return null;

    const [, translationObj] = await this.getWithParent(objectId);

    return translationObj;
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

  async update(input: any) {
    // eslint-disable-next-line no-underscore-dangle
    if (!input._id) return null;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _id, ...rest } = input;

    const [phraseObj, translationObj] = await this.getWithParent(_id);
    if (!translationObj) return null;

    Object.assign(translationObj, rest);
    phraseObj.save();

    return translationObj;
  }

  async delete(input: any) {
    // eslint-disable-next-line no-underscore-dangle
    if (!input._id) return null;

    // eslint-disable-next-line no-underscore-dangle
    const [phraseObj, translationObj] = await this.getWithParent(input._id);
    if (!translationObj) return null;

    // remove translation
    translationObj.remove();
    phraseObj.save();

    return translationObj;
  }
}

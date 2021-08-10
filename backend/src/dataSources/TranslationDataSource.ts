import { ObjectId } from 'mongoose';
import { translationLoader } from '../dataLoaders';
import { Translation } from '../models';
import AbstractMongooseDataSource from './AbstractMongooseDataSource';

export default class PhraseDataSource extends AbstractMongooseDataSource {
  constructor() {
    super();
    this.model = Translation;
    this.dataLoader = translationLoader;
  }

  async getByPhrase(phraseId: ObjectId) {
    return this.model.find({ phrase: phraseId }).exec();
  }

  async getByPhraseAndId(phraseId: ObjectId, _id: ObjectId) {
    return this.model.findOne({ _id, phrase: phraseId }).exec();
  }
}

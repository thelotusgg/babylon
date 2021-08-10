import { ObjectId } from 'mongoose';
import { phraseLoader } from '../dataLoaders';
import { Phrase } from '../models';
import AbstractMongooseDataSource from './AbstractMongooseDataSource';

export default class PhraseDataSource extends AbstractMongooseDataSource {
  constructor() {
    super();
    this.model = Phrase;
    this.dataLoader = phraseLoader;
  }

  async getByProject(projectId: ObjectId) {
    return this.model.find({ project: projectId }).exec();
  }

  async getByProjectAndId(projectId: ObjectId, _id: ObjectId) {
    return this.model.findOne({ _id, project: projectId }).exec();
  }
}

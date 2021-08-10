import { ObjectId } from 'mongoose';
import { proposalLoader } from '../dataLoaders';
import { Proposal } from '../models';
import AbstractMongooseDataSource from './AbstractMongooseDataSource';

export default class ProposalDataSource extends AbstractMongooseDataSource {
  constructor() {
    super();
    this.model = Proposal;
    this.dataLoader = proposalLoader;
  }

  async getByTranslation(translationId: ObjectId) {
    return this.model.find({ translation: translationId }).exec();
  }

  async getByTranslationAndId(translationId: ObjectId, _id: ObjectId) {
    return this.model.findOne({ _id, translation: translationId }).exec();
  }
}

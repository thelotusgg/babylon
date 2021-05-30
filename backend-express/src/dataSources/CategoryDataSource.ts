import { ObjectId } from 'mongoose';
import { categoryLoader } from '../dataLoaders';
import { Category } from '../models';
import AbstractMongooseDataSource from './AbstractMongooseDataSource';

export default class CategoryDataSource extends AbstractMongooseDataSource {
  constructor() {
    super();
    this.model = Category;
    this.dataLoader = categoryLoader;
  }

  async getByParent(parentId: ObjectId) {
    const documenets = await this.model.find({ parent: parentId });
    return documenets;
  }
}

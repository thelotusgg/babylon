import { ObjectId } from 'mongoose';
import { projectLoader } from '../dataLoaders';
import { Project } from '../models';
import AbstractMongooseDataSource from './AbstractMongooseDataSource';

export default class ProjectDataSource extends AbstractMongooseDataSource {
  constructor() {
    super();
    this.model = Project;
    this.dataLoader = projectLoader;
  }

  async getByCategory(categoryId: ObjectId) {
    return this.model.find({ category: categoryId });
  }
}
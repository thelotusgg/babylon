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

  async update(input: any) {
    // eslint-disable-next-line no-underscore-dangle
    if (!input._id) return null;

    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      _id, titles, descriptions, ...rest
    } = input;

    const object = await this.get(_id);

    this.dataLoader.clear(_id);

    return this.model.findOneAndUpdate({ _id }, {
      titles: ProjectDataSource.updateMultiligualTexts(object.titles, titles),
      descriptions: ProjectDataSource.updateMultiligualTexts(object.descriptions, descriptions),
      ...rest,
    }, { new: true });
  }

  async deleteDescription(input: any) {
    return this.deleteMultiligualText('description', input);
  }

  async deleteTitle(input: any) {
    return this.deleteMultiligualText('title', input);
  }
}

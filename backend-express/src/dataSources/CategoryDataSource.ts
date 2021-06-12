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
    return this.model.find({ parent: parentId });
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
      titles: CategoryDataSource.updateMultiligualTexts(object.titles, titles),
      descriptions: CategoryDataSource.updateMultiligualTexts(object.descriptions, descriptions),
      ...rest[0],
    }, { new: true });
  }

  async deleteDescription(input: any) {
    return this.deleteMultiligualText('description', input);
  }

  async deleteTitle(input: any) {
    return this.deleteMultiligualText('title', input);
  }
}

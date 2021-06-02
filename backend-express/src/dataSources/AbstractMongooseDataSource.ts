import { DataSource } from 'apollo-datasource';

export default abstract class AbstractMongooseDataSource extends DataSource {
  model: any;

  dataLoader: any;

  async getAll(find: any = {}) {
    return this.model.find(find).exec();
  }

  get(objectIds: string | string[]) {
    if (!objectIds) return null;
    return this.dataLoader.load(objectIds);
  }

  async create(input: any) {
    return this.model.create(input);
  }

  async update(input: any) {
    // eslint-disable-next-line no-underscore-dangle
    if (!input._id) return null;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _id, ...rest } = input;

    return this.model.findOneAndUpdate(
      { _id }, { $set: rest }, { new: true },
    );
  }

  async delete(input: any) {
    // eslint-disable-next-line no-underscore-dangle
    if (!input._id) return null;

    // eslint-disable-next-line no-underscore-dangle
    return this.model.findOneAndRemove({ _id: input._id });
  }
}

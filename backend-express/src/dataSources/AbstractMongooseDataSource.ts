import { DataSource } from 'apollo-datasource';

export default abstract class AbstractMongooseDataSource extends DataSource {
  model: any;

  dataLoader: any;

  async getAll() {
    return this.model.find({}).exec();
  }

  get(objectIds: string | string[]) {
    return this.dataLoader.load(objectIds);
  }
}

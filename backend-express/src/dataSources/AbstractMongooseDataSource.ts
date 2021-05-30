import { DataSource } from 'apollo-datasource';

export default abstract class AbstractMongooseDataSource extends DataSource {
  model: any;

  dataLoader: any;

  async getAll() {
    const documenets = await this.model.find({});
    return documenets;
  }

  get(objectIds: string | string[]) {
    return this.dataLoader.load(objectIds);
  }
}

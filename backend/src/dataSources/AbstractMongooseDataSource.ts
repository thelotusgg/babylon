import { DataSource } from 'apollo-datasource';
import { ObjectId, Schema } from 'mongoose';

export default abstract class AbstractMongooseDataSource extends DataSource {
  model: any;

  dataLoader: any;

  async getAll(find: any = {}) {
    return this.model.find(find).exec();
  }

  async get(objectIds: string | string[]) {
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

    // clear cache
    this.dataLoader.clear(_id);

    return this.model.findOneAndUpdate(
      { _id }, { $set: rest }, { new: true },
    );
  }

  static updateMultiligualTexts(multiligualTextsOld: any, multiligualTextsNew: any) {
    const tmp: { [key: string]: string } = {};

    const result: { _id?: Schema.Types.ObjectId; languageCode: string; value: string; }[] = [];
    if (multiligualTextsNew) {
      multiligualTextsNew.forEach((title: { languageCode: string, value: string }) => {
        tmp[title.languageCode] = title.value;
      });
    }

    if (multiligualTextsOld) {
      multiligualTextsOld.forEach(
        (title: { _id: ObjectId, languageCode: string, value: string }) => {
          const newTitle = title;

          if (tmp[newTitle.languageCode]) {
            newTitle.value = tmp[title.languageCode];
            delete tmp[title.languageCode];
          }

          result.push(newTitle);
        },
      );
    }

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in tmp) {
      result.push({
        languageCode: key,
        value: tmp[key],
      });
    }

    return result;
  }

  async delete(input: any) {
    // eslint-disable-next-line no-underscore-dangle
    if (!input._id) return null;

    // clear cache
    // eslint-disable-next-line no-underscore-dangle
    this.dataLoader.clear(input._id);

    // eslint-disable-next-line no-underscore-dangle
    return this.model.findOneAndRemove({ _id: input._id });
  }

  async deleteMultiligualText(field: string, input: any, fieldPlural: string = '') {
    // eslint-disable-next-line no-underscore-dangle
    if (!input._id || !input[field]) return null;

    // get db field
    let dbField = fieldPlural;
    if (!dbField) {
      dbField = `${field}s`;
    }

    // clear cache
    // eslint-disable-next-line no-underscore-dangle
    this.dataLoader.clear(input._id);

    return this.model.findOneAndUpdate(
      // eslint-disable-next-line no-underscore-dangle
      { _id: input._id },
      { $pull: { [dbField]: { _id: input[field] } } },
      { new: true },
    );
  }
}

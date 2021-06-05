import { Schema } from 'mongoose';

export default new Schema({
  titles: {
    type: [{
      languageCode: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    }],
    required: true,
    validate: (x: any) => Array.isArray(x) && x.length > 0,
  },
  descriptions: [{
    languageCode: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  }],
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  },
});

import { Schema } from 'mongoose';

export default new Schema({
  titles: [{
    languageCode: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  }],
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

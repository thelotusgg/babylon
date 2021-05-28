import { Schema } from 'mongoose';

export default new Schema({
  title: [{
    languageCode: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  }],
  description: [{
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

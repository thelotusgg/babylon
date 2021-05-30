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
  languages: [{
    code: {
      type: String,
      required: true,
    },
  }],
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'category',
  },
}, {
  timestamps: true,
});

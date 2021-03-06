import { Schema } from 'mongoose';

export default new Schema({
  languageCode: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  phrase: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'phrase',
  },
  comments: [{
    value: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    replies: [{
      value: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
    }],
  }],
});

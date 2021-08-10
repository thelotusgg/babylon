import { Schema } from 'mongoose';
import Translation from './Translation';

export default new Schema({
  project: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'project',
  },
  key: {
    type: String,
  },
  translations: [Translation],
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
}, {
  timestamps: true,
});

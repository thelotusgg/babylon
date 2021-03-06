import { Schema } from 'mongoose';

export default new Schema({
  value: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    // required: true,
    ref: 'user',
  },
  translation: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'translation',
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
}, {
  timestamps: true,
});

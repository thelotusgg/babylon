import { Schema } from 'mongoose';

export default new Schema({
  project: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'project',
  },
  key: {
    type: String,
  },
  translations: [{
    languageCode: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    proposals: [{
      value: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
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
    }],
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
  }],
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

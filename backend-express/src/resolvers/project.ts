import models from '../models';

export default {
  Query: {
    projects: async () => {
      const result = await models.Project.find({});
      return result;
    },
  },
};

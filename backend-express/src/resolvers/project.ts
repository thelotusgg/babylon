export default {
  Query: {
    projects: async (_: any, __: any, { dataSources: { project } }: any) => project.getAll(),
    project: (_: any, { _id }: any, { dataSources: { project } }: any) => project.get(_id),
  },
};

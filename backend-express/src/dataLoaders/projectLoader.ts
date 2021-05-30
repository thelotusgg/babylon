import DataLoader from 'dataloader';
import { Project } from '../models';

const projectLoader = new DataLoader(async (projectIds) => {
  const projects = await Project.find({ _id: { $in: projectIds } });
  return projects;
});

export default projectLoader;

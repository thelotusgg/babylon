import DataLoader from 'dataloader';
import { Project } from '../models';

// eslint-disable-next-line max-len
const projectLoader = new DataLoader(async (projectIds) => Project.find({ _id: { $in: projectIds } }).exec());

export default projectLoader;

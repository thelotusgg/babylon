import DataLoader from 'dataloader';
import { Category } from '../models';

// eslint-disable-next-line max-len
const categoryLoader = new DataLoader(async (categoryIds) => Category.find({ _id: { $in: categoryIds } }).exec());

export default categoryLoader;

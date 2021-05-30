import DataLoader from 'dataloader';
import { Category } from '../models';

const categoryLoader = new DataLoader(async (categoryIds) => {
  const categories = await Category.find({ _id: { $in: categoryIds } });
  return categories;
});

export default categoryLoader;

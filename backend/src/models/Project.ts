import { model } from 'mongoose';
import { Project as ProjectSchema } from '../schemas';

export default model('Project', ProjectSchema);

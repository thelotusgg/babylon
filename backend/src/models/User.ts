import { model } from 'mongoose';
import { User as UserSchema } from '../schemas';

export default model('User', UserSchema);

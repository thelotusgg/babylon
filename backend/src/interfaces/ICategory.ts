import { ObjectId } from 'mongoose';
import IMultiligualText from './IMultiligualText';

export default interface ICategory {
  _id: ObjectId
  titles: [IMultiligualText]
  descriptions: [IMultiligualText]
  parent: ObjectId
}

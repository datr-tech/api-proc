import { Types } from 'mongoose';

export interface IThreadModel {
  threadId: Types.ObjectId;
  hopId: Types.ObjectId;
  processId: Types.ObjectId;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}

import { Types } from 'mongoose';

export interface IThreadControllerCreateThreadInput {
  hopId: Types.ObjectId;
  processId: Types.ObjectId;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}

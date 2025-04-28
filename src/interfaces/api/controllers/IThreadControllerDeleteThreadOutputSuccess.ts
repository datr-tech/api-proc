import { Types } from 'mongoose';

export interface IThreadControllerDeleteThreadOutputSuccess {
  error: false;
  payload: {
    threadId: Types.ObjectId;
  };
}

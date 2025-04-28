import { Types } from 'mongoose';

export interface IThreadControllerUpdateThreadOutputSuccess {
  error: false;
  payload: {
    threadId: Types.ObjectId;
  };
}

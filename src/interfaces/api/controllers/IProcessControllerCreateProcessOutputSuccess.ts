import { Types } from 'mongoose';

export interface IProcessControllerCreateProcessOutputSuccess {
  error: false;
  payload: {
    processId: Types.ObjectId;
  };
}

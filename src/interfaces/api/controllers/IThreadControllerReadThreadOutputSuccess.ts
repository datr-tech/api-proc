import { IThreadModel } from '@app-ap2/interfaces/api/models';

export interface IThreadControllerReadThreadOutputSuccess {
  error: false;
  payload: {
    threadModel: IThreadModel;
    responseStatusCode: number;
  };
}

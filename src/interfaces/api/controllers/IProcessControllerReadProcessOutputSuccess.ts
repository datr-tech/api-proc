import { IProcessModel } from '@app-ap2/interfaces/api/models';

export interface IProcessControllerReadProcessOutputSuccess {
  error: false;
  payload: {
    processModel: IProcessModel;
    responseStatusCode: number;
  };
}

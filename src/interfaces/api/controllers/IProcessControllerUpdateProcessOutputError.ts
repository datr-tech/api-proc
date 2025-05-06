export interface IProcessControllerUpdateProcessOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}

export interface IProcessControllerReadProcessOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}

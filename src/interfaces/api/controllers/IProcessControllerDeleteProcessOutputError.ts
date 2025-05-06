export interface IProcessControllerDeleteProcessOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}

export interface IProcessControllerCreateProcessOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}

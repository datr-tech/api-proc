export interface IThreadControllerUpdateThreadOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}

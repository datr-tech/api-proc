export interface IThreadControllerDeleteThreadOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}

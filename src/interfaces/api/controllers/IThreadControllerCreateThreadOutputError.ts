export interface IThreadControllerCreateThreadOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}

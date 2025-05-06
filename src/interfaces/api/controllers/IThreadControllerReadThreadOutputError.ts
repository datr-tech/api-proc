export interface IThreadControllerReadThreadOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}

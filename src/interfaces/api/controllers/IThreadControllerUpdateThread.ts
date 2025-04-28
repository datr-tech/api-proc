import { IThreadControllerUpdateThreadInput } from './IThreadControllerUpdateThreadInput';
import { IThreadControllerUpdateThreadOutput } from './IThreadControllerUpdateThreadOutput';

export interface IThreadControllerUpdateThread {
  (
    args: IThreadControllerUpdateThreadInput,
  ): Promise<IThreadControllerUpdateThreadOutput>;
}

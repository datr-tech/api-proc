import { IThreadControllerCreateThreadInput } from './IThreadControllerCreateThreadInput';
import { IThreadControllerCreateThreadOutput } from './IThreadControllerCreateThreadOutput';

export interface IThreadControllerCreateThread {
  (
    args: IThreadControllerCreateThreadInput,
  ): Promise<IThreadControllerCreateThreadOutput>;
}

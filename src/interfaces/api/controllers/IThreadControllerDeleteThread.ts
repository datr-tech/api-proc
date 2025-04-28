import { IThreadControllerDeleteThreadInput } from './IThreadControllerDeleteThreadInput';
import { IThreadControllerDeleteThreadOutput } from './IThreadControllerDeleteThreadOutput';

export interface IThreadControllerDeleteThread {
  (
    args: IThreadControllerDeleteThreadInput,
  ): Promise<IThreadControllerDeleteThreadOutput>;
}

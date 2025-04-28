import { IThreadControllerReadThreadInput } from './IThreadControllerReadThreadInput';
import { IThreadControllerReadThreadOutput } from './IThreadControllerReadThreadOutput';

export interface IThreadControllerReadThread {
  (args: IThreadControllerReadThreadInput): Promise<IThreadControllerReadThreadOutput>;
}

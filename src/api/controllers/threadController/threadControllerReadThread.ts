import { ThreadModel } from '@app-ap2/api/models';
import { baseStat } from '@app-ap2/api/util/baseStat';
import {
  IThreadControllerReadThread,
  IThreadControllerReadThreadOutputError,
  IThreadControllerReadThreadOutputSuccess,
} from '@app-ap2/interfaces/api/controllers';

/**
 * threadControllerReadThread
 *
 * The proc API read thread controller.
 *
 * @param { IThreadControllerReadThreadInput } params
 * @param { Types.ObjectId } params.threadId
 *
 * @returns { Promise<IThreadControllerReadThreadOutput> }
 * @returns { Promise<IThreadControllerReadThreadOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IThreadControllerReadThreadOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { threadModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const threadControllerReadThread: IThreadControllerReadThread = async ({
  threadId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ThreadModel'
     * using the received 'threadId' param.
     */
    const threadModel = await ThreadModel.findById(threadId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { threadModel };

    /*
     * Cast the response object to
     * 'IThreadControllerReadThreadOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IThreadControllerReadThreadOutput'.
     */
    return stat as IThreadControllerReadThreadOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IThreadControllerReadThreadOutputError',
     */
    return stat as IThreadControllerReadThreadOutputError;
  }
};

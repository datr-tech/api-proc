import { ThreadModel } from '@app-ap2/api/models';
import { baseStat } from '@app-ap2/api/util/baseStat';
import {
  IThreadControllerUpdateThread,
  IThreadControllerUpdateThreadOutputError,
  IThreadControllerUpdateThreadOutputSuccess,
} from '@app-ap2/interfaces/api/controllers';

/**
 * threadControllerUpdateThread
 *
 * The proc API update thread controller.
 *
 * @param { IThreadControllerUpdateThreadInput } params
 * @param { Types.ObjectId } params.threadId
 * @param { Types.ObjectId } params.payload.hopId  (Optional)
 * @param { Types.ObjectId } params.payload.processId  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IThreadControllerUpdateThreadOutput> }
 * @returns { Promise<IThreadControllerUpdateThreadOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IThreadControllerUpdateThreadOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { threadModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const threadControllerUpdateThread: IThreadControllerUpdateThread = async ({
  threadId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ThreadModel'
     * using the received 'threadId' param.
     * When successful, update the found model using
     * the key value pairs (or fields) from within the
     * 'payload' param.
     */
    await ThreadModel.findOneAndUpdate(
      {
        _id: threadId,
      },
      payload,
      {
        includeResultMetadata: true,
      },
    );

    /*
     * Use the standard controller response object,
     * 'stat', to return the updated model's primary key.
     */
    stat.error = false;
    stat.payload = { threadId };

    /*
     * Cast the response object to 'IThreadControllerUpdateThreadOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IThreadControllerUpdateThreadOutput'.
     */
    return stat as IThreadControllerUpdateThreadOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IThreadControllerUpdateThreadOutputError',
     */
    return stat as IThreadControllerUpdateThreadOutputError;
  }
};

import { ThreadModel } from '@app-ap2/api/models';
import { baseStat } from '@app-ap2/api/util/baseStat';
import {
  IThreadControllerCreateThread,
  IThreadControllerCreateThreadOutputError,
  IThreadControllerCreateThreadOutputSuccess,
} from '@app-ap2/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * threadControllerCreateThread
 *
 * The proc API create thread controller.
 *
 * @param { IThreadControllerCreateThreadInput } params
 * @param { Types.ObjectId } params.threadId
 * @param { Types.ObjectId } params.hopId
 * @param { Types.ObjectId } params.processId
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IThreadControllerCreateThreadOutput> }
 * @returns { Promise<IThreadControllerCreateThreadOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IThreadControllerCreateThreadOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { threadModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const threadControllerCreateThread: IThreadControllerCreateThread = async ({
  hopId,
  processId,
  adminStatusId,
  adminUserId,
  createdAt,
  updatedAt,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Populate the local 'modelParams' variable
     * with the received inputs.
     */
    const threadId = new Types.ObjectId();
    const modelParams = {
      threadId,
      hopId,
      processId,
      adminStatusId,
      adminUserId,
      createdAt,
      updatedAt,
    };

    /*
     * Use the populated 'modelParams' variable
     * to create a new instance of 'ThreadModel'.
     * 'db-proc'. Then save the created
     * model to the associated store: 'db-proc',
     */
    const threadModel = new ThreadModel(modelParams);
    await threadModel.save();

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model's primary key.
     */
    stat.error = false;
    stat.payload = { threadId };

    /*
     * Cast the response object to
     * 'IThreadControllerCreateThreadOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IThreadControllerCreateThreadOutput'.
     */
    return stat as IThreadControllerCreateThreadOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IThreadControllerCreateThreadOutputError',
     */
    return stat as IThreadControllerCreateThreadOutputError;
  }
};

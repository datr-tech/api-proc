import { ThreadModel } from '@app-ap2/api/models';
import { baseStat } from '@app-ap2/api/util/baseStat';
import {
  IThreadControllerDeleteThread,
  IThreadControllerDeleteThreadOutputError,
  IThreadControllerDeleteThreadOutputSuccess,
} from '@app-ap2/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * threadControllerDeleteThread
 *
 * The proc API delete thread controller.
 *
 * @param { IThreadControllerDeleteThreadInput } params
 * @param { Types.ObjectId } params.threadId
 *
 * @returns { Promise<IThreadControllerDeleteThreadOutput> }
 * @returns { Promise<IThreadControllerDeleteThreadOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IThreadControllerDeleteThreadOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { threadModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const threadControllerDeleteThread: IThreadControllerDeleteThread = async ({
  threadId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ThreadModel'
     * using the received 'threadId' param.
     * When successful, perform a "soft delete" upon the
     * found model by updating the value of the model's
     * 'adminStatusId' field.
     */
    const threadModel = await ThreadModel.findOneAndUpdate(
      {
        _id: threadId,
      },
      {
        adminStatusId: new Types.ObjectId(),
      },
      {
        includeResultMetadata: true,
      },
    );

    /*
     * Use the standard controller response object,
     * 'stat', to return the primary key of the
     * "soft deleted" model.
     */
    stat.error = false;
    stat.payload = { threadId: threadModel.id };

    /*
     * Cast the response object to
     * 'IThreadControllerDeleteThreadOutputSuccess',
     * where the casting interface is a component of
     * the binary union type
     * 'IThreadControllerDeleteThreadOutput'.
     */
    return stat as IThreadControllerDeleteThreadOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IThreadControllerDeleteThreadOutputError',
     */
    return stat as IThreadControllerDeleteThreadOutputError;
  }
};

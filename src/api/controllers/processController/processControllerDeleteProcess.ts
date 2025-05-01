import { ProcessModel } from '@app-ap2/api/models';
import { baseStat } from '@app-ap2/api/util/baseStat';
import {
  IProcessControllerDeleteProcess,
  IProcessControllerDeleteProcessOutputError,
  IProcessControllerDeleteProcessOutputSuccess,
} from '@app-ap2/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * processControllerDeleteProcess
 *
 * The proc API delete process controller.
 *
 * @param { IProcessControllerDeleteProcessInput } params
 * @param { Types.ObjectId } params.processId
 *
 * @returns { Promise<IProcessControllerDeleteProcessOutput> }
 * @returns { Promise<IProcessControllerDeleteProcessOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProcessControllerDeleteProcessOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { processModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const processControllerDeleteProcess: IProcessControllerDeleteProcess = async ({
  processId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ProcessModel'
     * using the received 'processId' param.
     * When successful, perform a "soft delete" upon the
     * found model by updating the value of the model's
     * 'adminStatusId' field.
     */
    await ProcessModel.findOneAndUpdate(
      {
        _id: processId,
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
    stat.payload = { processId };

    /*
     * Cast the response object to
     * 'IProcessControllerDeleteProcessOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IProcessControllerDeleteProcessOutput'.
     */
    return stat as IProcessControllerDeleteProcessOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IProcessControllerDeleteProcessOutputError',
     */
    return stat as IProcessControllerDeleteProcessOutputError;
  }
};

import { ProcessModel } from '@app-ap2/api/models';
import { baseStat } from '@app-ap2/api/util/baseStat';
import {
  IProcessControllerUpdateProcess,
  IProcessControllerUpdateProcessOutputError,
  IProcessControllerUpdateProcessOutputSuccess,
} from '@app-ap2/interfaces/api/controllers';

/**
 * processControllerUpdateProcess
 *
 * The proc API update process controller.
 *
 * @param { IProcessControllerUpdateProcessInput } params
 * @param { Types.ObjectId } params.processId
 * @param { Types.ObjectId } params.payload.frameworkId  (Optional)
 * @param { Types.ObjectId } params.payload.journeyId  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IProcessControllerUpdateProcessOutput> }
 * @returns { Promise<IProcessControllerUpdateProcessOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProcessControllerUpdateProcessOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { processModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const processControllerUpdateProcess: IProcessControllerUpdateProcess = async ({
  processId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ProcessModel'
     * using the received 'processId' param.
     * When successful, update the found model using
     * the key value pairs (or fields) from within the
     * 'payload' param.
     */
    await ProcessModel.findOneAndUpdate(
      {
        _id: processId,
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
    stat.payload = {
      processId,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to 'IProcessControllerUpdateProcessOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IProcessControllerUpdateProcessOutput'.
     */
    return stat as IProcessControllerUpdateProcessOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = {
      message,
      responseStatusCode: 404,
    };

    /*
     * Cast the response object to 'IProcessControllerUpdateProcessOutputError',
     */
    return stat as IProcessControllerUpdateProcessOutputError;
  }
};

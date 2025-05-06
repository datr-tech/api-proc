import { ProcessModel } from '@app-ap2/api/models';
import { baseStat } from '@app-ap2/api/util/baseStat';
import {
  IProcessControllerReadProcess,
  IProcessControllerReadProcessOutputError,
  IProcessControllerReadProcessOutputSuccess,
} from '@app-ap2/interfaces/api/controllers';

/**
 * processControllerReadProcess
 *
 * The proc API read process controller.
 *
 * @param { IProcessControllerReadProcessInput } params
 * @param { Types.ObjectId } params.processId
 *
 * @returns { Promise<IProcessControllerReadProcessOutput> }
 * @returns { Promise<IProcessControllerReadProcessOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProcessControllerReadProcessOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { processModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const processControllerReadProcess: IProcessControllerReadProcess = async ({
  processId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ProcessModel'
     * using the received 'processId' param.
     */
    const processModel = await ProcessModel.findById(processId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = {
      processModel,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to
     * 'IProcessControllerReadProcessOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IProcessControllerReadProcessOutput'.
     */
    return stat as IProcessControllerReadProcessOutputSuccess;
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
     * Cast the response object to 'IProcessControllerReadProcessOutputError',
     */
    return stat as IProcessControllerReadProcessOutputError;
  }
};

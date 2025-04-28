import { ProcessModel } from '@app-ap2/api/models';
import { baseStat } from '@app-ap2/api/util/baseStat';
import {
  IProcessControllerCreateProcess,
  IProcessControllerCreateProcessOutputError,
  IProcessControllerCreateProcessOutputSuccess,
} from '@app-ap2/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * processControllerCreateProcess
 *
 * The proc API create process controller.
 *
 * @param { IProcessControllerCreateProcessInput } params
 * @param { Types.ObjectId } params.processId
 * @param { Types.ObjectId } params.frameworkId
 * @param { Types.ObjectId } params.journeyId
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IProcessControllerCreateProcessOutput> }
 * @returns { Promise<IProcessControllerCreateProcessOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProcessControllerCreateProcessOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { processModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const processControllerCreateProcess: IProcessControllerCreateProcess = async ({
  frameworkId,
  journeyId,
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
    const processId = new Types.ObjectId();
    const modelParams = {
      processId,
      frameworkId,
      journeyId,
      adminStatusId,
      adminUserId,
      createdAt,
      updatedAt,
    };

    /*
     * Use the populated 'modelParams' variable
     * to create a new instance of 'ProcessModel'.
     * 'db-proc'. Then save the created
     * model to the associated store: 'db-proc',
     */
    const processModel = new ProcessModel(modelParams);
    await processModel.save();

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model's primary key.
     */
    stat.error = false;
    stat.payload = { processId };

    /*
     * Cast the response object to
     * 'IProcessControllerCreateProcessOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IProcessControllerCreateProcessOutput'.
     */
    return stat as IProcessControllerCreateProcessOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IProcessControllerCreateProcessOutputError',
     */
    return stat as IProcessControllerCreateProcessOutputError;
  }
};

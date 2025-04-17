import { ProcessModel } from '@app/api/models';

export const modelValidatorProcessId = async (doc, next) => {
  let proc;
  let processId;

  if (doc && typeof doc.processId !== 'undefined') {
    processId = doc.processId;
  }

  if (processId) {
    proc = await ProcessModel.findById(processId);
  }

  if (!proc) {
    throw new Error('processId: invalid');
  }

  next();
};

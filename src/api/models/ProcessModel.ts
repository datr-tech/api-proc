import { model, Schema } from 'mongoose';
import { processModelSchema, processModelSchemaOptions } from '@freight/proc-model-schemas';
import {
  modelValidatorFrameworkId,
  modelValidatorJourneyId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const processSchema = new Schema(processModelSchema, processModelSchemaOptions);

processSchema.post('validate', modelValidatorFrameworkId);
processSchema.post('validate', modelValidatorJourneyId);
processSchema.post('validate', modelValidatorAdminStatusId);
processSchema.post('validate', modelValidatorAdminUserId);

export const ProcessModel = model('ProcessModel', processSchema);

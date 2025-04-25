import { model, Schema } from 'mongoose';
import { processModelSchema, processModelSchemaOptions } from '@datr.tech/parcel-model-schemas-proc';
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

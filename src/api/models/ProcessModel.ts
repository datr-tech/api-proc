import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorFrameworkId,
  modelValidatorJourneyId,
} from '@app-ap2/api/modelValidators/foreign';
import {
  processModelSchema,
  processModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-proc';
import { model, Schema } from 'mongoose';

const processSchema = new Schema(processModelSchema, processModelSchemaOptions);

processSchema.post('validate', modelValidatorFrameworkId);
processSchema.post('validate', modelValidatorJourneyId);
processSchema.post('validate', modelValidatorAdminStatusId);
processSchema.post('validate', modelValidatorAdminUserId);

export const ProcessModel = model('ProcessModel', processSchema);

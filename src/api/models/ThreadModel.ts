import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorHopId,
  modelValidatorProcessId,
} from '@app-ap2/api/modelValidators';
import {
  threadModelSchema,
  threadModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-proc';
import { model, Schema } from 'mongoose';

const threadSchema = new Schema(threadModelSchema, threadModelSchemaOptions);

threadSchema.post('validate', modelValidatorHopId);
threadSchema.post('validate', modelValidatorProcessId);
threadSchema.post('validate', modelValidatorAdminStatusId);
threadSchema.post('validate', modelValidatorAdminUserId);

export const ThreadModel = model('ThreadModel', threadSchema);

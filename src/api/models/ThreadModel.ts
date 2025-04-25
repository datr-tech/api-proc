import { model, Schema } from 'mongoose';
import { threadModelSchema, threadModelSchemaOptions } from '@datr.tech/parcel-model-schemas-proc';
import {
  modelValidatorHopId,
  modelValidatorProcessId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const threadSchema = new Schema(threadModelSchema, threadModelSchemaOptions);

threadSchema.post('validate', modelValidatorHopId);
threadSchema.post('validate', modelValidatorProcessId);
threadSchema.post('validate', modelValidatorAdminStatusId);
threadSchema.post('validate', modelValidatorAdminUserId);

export const ThreadModel = model('ThreadModel', threadSchema);

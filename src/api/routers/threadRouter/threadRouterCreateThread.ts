import { threadController } from '@app-ap2/api/controllers/threadController';
import { IThreadModel } from '@app-ap2/interfaces/api/models/IThreadModel';
import { threadValidationSchemaCreateThread } from '@datr.tech/cargo-router-validation-schemas-proc';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const threadRouterCreateThread = Router(options).post(
  '/',
  checkSchema(<Schema>threadValidationSchemaCreateThread),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IThreadModel>(req);
      const threadId = await threadController.createThread(validatedParams);

      res.status(201).send({ threadId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);

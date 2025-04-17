import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { threadValidationSchemaCreateThread } from '@freight/proc-router-validation-schemas';
import { threadController } from '@app/api/controllers/threadController';
import { IThreadModel } from '@app/interfaces/api/models/IThreadModel';

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

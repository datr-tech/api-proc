import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { threadValidationSchemaUpdateThread } from '@freight/proc-router-validation-schemas';
import { threadController } from '@app/api/controllers/threadController';

export const threadRouterUpdateThread = Router(options).patch(
  '/',
  checkSchema(<Schema>threadValidationSchemaUpdateThread),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { threadId, ...payload } = matchedData(req);
      const updateStatus = await threadController.updateThread({ threadId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);

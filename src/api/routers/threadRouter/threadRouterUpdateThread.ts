import { threadController } from '@app-ap2/api/controllers/threadController';
import { threadValidationSchemaUpdateThread } from '@datr.tech/cargo-router-validation-schemas-proc';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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

import { threadController } from '@app-ap2/api/controllers/threadController';
import { threadValidationSchemaReadThread } from '@datr.tech/cargo-router-validation-schemas-proc';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const threadRouterReadThread = Router(options).get(
  '/',
  checkSchema(<Schema>threadValidationSchemaReadThread),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { threadId } = matchedData(req);
      const thread = await threadController.readThread({ threadId });

      res.status(200).send({ thread });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);

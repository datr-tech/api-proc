import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { threadValidationSchemaReadThread } from '@freight/proc-router-validation-schemas';
import { threadController } from '@app/api/controllers/threadController';

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

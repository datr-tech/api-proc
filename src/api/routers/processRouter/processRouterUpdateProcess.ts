import { processController } from '@app-ap2/api/controllers/processController';
import { processValidationSchemaUpdateProcess } from '@datr.tech/cargo-router-validation-schemas-proc';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const processRouterUpdateProcess = Router(options).patch(
  '/',
  checkSchema(<Schema>processValidationSchemaUpdateProcess),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { processId, ...payload } = matchedData(req);
      const updateStatus = await processController.updateProcess({ processId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);

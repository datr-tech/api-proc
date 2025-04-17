import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { processValidationSchemaUpdateProcess } from '@freight/proc-router-validation-schemas';
import { processController } from '@app/api/controllers/processController';

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

import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { processValidationSchemaDeleteProcess } from '@freight/proc-router-validation-schemas';
import { processController } from '@app/api/controllers/processController';

export const processRouterDeleteProcess = Router(options).get(
  '/',
  checkSchema(<Schema>processValidationSchemaDeleteProcess),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { processId } = matchedData(req);
      const deleteResponse = await processController.deleteProcess({ processId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);

import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { processValidationSchemaReadProcess } from '@freight/proc-router-validation-schemas';
import { processController } from '@app/api/controllers/processController';

export const processRouterReadProcess = Router(options).get(
  '/',
  checkSchema(<Schema>processValidationSchemaReadProcess),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { processId } = matchedData(req);
      const process = await processController.readProcess({ processId });

      res.status(200).send({ process });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);

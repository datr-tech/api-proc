import { processController } from '@app-ap2/api/controllers/processController';
import { processValidationSchemaReadProcess } from '@datr.tech/cargo-router-validation-schemas-proc';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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

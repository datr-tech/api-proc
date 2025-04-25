import { processController } from '@app-ap2/api/controllers/processController';
import { processValidationSchemaDeleteProcess } from '@datr.tech/cargo-router-validation-schemas-proc';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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

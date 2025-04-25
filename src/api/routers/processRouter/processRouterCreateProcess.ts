import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@datr.tech/leith-config-api-router-options';
import { processValidationSchemaCreateProcess } from '@datr.tech/cargo-router-validation-schemas-proc';
import { processController } from '@app/api/controllers/processController';
import { IProcessModel } from '@app/interfaces/api/models/IProcessModel';

export const processRouterCreateProcess = Router(options).post(
  '/',
  checkSchema(<Schema>processValidationSchemaCreateProcess),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IProcessModel>(req);
      const processId = await processController.createProcess(validatedParams);

      res.status(201).send({ processId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);

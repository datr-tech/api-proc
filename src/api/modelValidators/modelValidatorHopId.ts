import { dolomiteService } from '@datr.tech/leith-common-services';

export const modelValidatorHopId = async (doc, next) => {
  let hopId;
  let hasHop = false;

  if (doc && typeof doc.hopId !== 'undefined') {
    hopId = doc.hopId;
  }

  if (hopId) {
    hasHop = await dolomiteService.hasHop({
      hopId,
    });
  }

  if (!hasHop) {
    throw new Error('hopId: invalid');
  }

  next();
};

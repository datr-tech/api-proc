import { dolomiteService } from '@datr.tech/leith-common-services';

export const modelValidatorJourneyId = async (doc, next) => {
  let journeyId;
  let hasJourney = false;

  if (doc && typeof doc.journeyId !== 'undefined') {
    journeyId = doc.journeyId;
  }

  if (journeyId) {
    hasJourney = await dolomiteService.hasJourney({
      journeyId,
    });
  }

  if (!hasJourney) {
    throw new Error('journeyId: invalid');
  }

  next();
};

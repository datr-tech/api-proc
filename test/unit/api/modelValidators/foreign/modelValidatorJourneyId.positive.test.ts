const dolomiteServiceHasJourneyMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  dolomiteService: {
    hasJourney: dolomiteServiceHasJourneyMock,
  },
}));

import { modelValidatorJourneyId } from '@app-p2/api/modelValidators/foreign';
import { Types } from 'mongoose';

describe('modelValidatorJourneyId', () => {
  describe('positive', () => {
    test('should not throw an error when the underlying dolomiteService (mocked) returns true', async () => {
      /*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { journeyId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      await modelValidatorJourneyId(docMock, nextMock);

      /*
       * Assert
       */
      expect(dolomiteServiceHasJourneyMock).toHaveBeenCalledTimes(1);
      expect(dolomiteServiceHasJourneyMock).toHaveBeenCalledWith(
        expect.objectContaining({ journeyId: idMock }),
      );
      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});

const dolomiteServiceHasJourneyMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  dolomiteService: {
		hasJourney: dolomiteServiceHasJourneyMock
  }
}));

import { modelValidatorJourneyId } from "@app-p2/api/modelValidators/foreign";
import { Types } from 'mongoose';

/**
 * modelValidatorJourneyId.negative
 *
 * A negative test for modelValidatorJourneyId where dolomiteService.hasJourney
 * (from '@datr.tech/leith-common-services') is mocked above, using dolomiteServiceHasJourneyMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe( "modelValidatorJourneyId", () => {
	describe("negative", () => {
		test("should throw the expected error when the underlying dolomiteService (mocked) returns false", async () => {
			/*
       * Arrange
       */
			const errorExpected = "journeyId: invalid";
      const idMock = new Types.ObjectId();
      const docMock = { journeyId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
			const handler = async () => {
				await modelValidatorJourneyId(docMock, nextMock);
			};

			/*
       * Assert
       */
			await expect(handler()).rejects.toThrowError(errorExpected);
		  expect( dolomiteServiceHasJourneyMock ).toHaveBeenCalledTimes(1);
		  expect( dolomiteServiceHasJourneyMock ).toHaveBeenCalledWith(expect.objectContaining({ journeyId: idMock }));
			expect(nextMock).not.toHaveBeenCalled();
		});
	});
}); 

const dolomiteServiceHasHopMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  dolomiteService: {
		hasHop: dolomiteServiceHasHopMock
  }
}));

import { modelValidatorHopId } from "@app-p2/api/modelValidators/foreign";
import { Types } from 'mongoose';

/**
 * modelValidatorHopId.negative
 *
 * A negative test for modelValidatorHopId where dolomiteService.hasHop
 * (from '@datr.tech/leith-common-services') is mocked above, using dolomiteServiceHasHopMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe( "modelValidatorHopId", () => {
	describe("negative", () => {
		test("should throw the expected error when the underlying dolomiteService (mocked) returns false", async () => {
			/*
       * Arrange
       */
			const errorExpected = "hopId: invalid";
      const idMock = new Types.ObjectId();
      const docMock = { hopId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
			const handler = async () => {
				await modelValidatorHopId(docMock, nextMock);
			};

			/*
       * Assert
       */
			await expect(handler()).rejects.toThrowError(errorExpected);
		  expect( dolomiteServiceHasHopMock ).toHaveBeenCalledTimes(1);
		  expect( dolomiteServiceHasHopMock ).toHaveBeenCalledWith(expect.objectContaining({ hopId: idMock }));
			expect(nextMock).not.toHaveBeenCalled();
		});
	});
}); 

const dolomiteServiceHasHopMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  dolomiteService: {
		hasHop: dolomiteServiceHasHopMock
  }
}));

import { modelValidatorHopId } from "@app-p2/api/modelValidators/foreign";
import { Types } from 'mongoose';

/**
 * modelValidatorHopId.positive
 *
 * A positive test for modelValidatorHopId where dolomiteService.hasHop
 * (from '@datr.tech/leith-common-services') is mocked above, using dolomiteServiceHasHopMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe( "modelValidatorHopId", () => {
	describe("positive", () => {
		test("should not throw an error when the underlying dolomiteService (mocked) returns true", async () => {
			/*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { hopId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
			await modelValidatorHopId(docMock, nextMock);

			/*
       * Assert
       */
		  expect( dolomiteServiceHasHopMock ).toHaveBeenCalledTimes(1);
      expect( dolomiteServiceHasHopMock ).toHaveBeenCalledWith(expect.objectContaining({ hopId: idMock }));
			expect(nextMock).toHaveBeenCalledTimes(1);
		});
	});
}); 

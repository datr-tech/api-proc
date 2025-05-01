const entityServiceHasFrameworkMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  entityService: {
		hasFramework: entityServiceHasFrameworkMock
  }
}));

import { modelValidatorFrameworkId } from "@app-p2/api/modelValidators/foreign";
import { Types } from 'mongoose';

/**
 * modelValidatorFrameworkId.negative
 *
 * A negative test for modelValidatorFrameworkId where entityService.hasFramework
 * (from '@datr.tech/leith-common-services') is mocked above, using entityServiceHasFrameworkMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe( "modelValidatorFrameworkId", () => {
	describe("negative", () => {
		test("should throw the expected error when the underlying entityService (mocked) returns false", async () => {
			/*
       * Arrange
       */
			const errorExpected = "frameworkId: invalid";
      const idMock = new Types.ObjectId();
      const docMock = { frameworkId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
			const handler = async () => {
				await modelValidatorFrameworkId(docMock, nextMock);
			};

			/*
       * Assert
       */
			await expect(handler()).rejects.toThrowError(errorExpected);
		  expect( entityServiceHasFrameworkMock ).toHaveBeenCalledTimes(1);
		  expect( entityServiceHasFrameworkMock ).toHaveBeenCalledWith(expect.objectContaining({ frameworkId: idMock }));
			expect(nextMock).not.toHaveBeenCalled();
		});
	});
}); 

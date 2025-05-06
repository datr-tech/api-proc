const adminServiceHasStatusMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  adminService: {
    hasStatus: adminServiceHasStatusMock,
  },
}));

import { modelValidatorAdminStatusId } from '@app-ap2/api/modelValidators/foreign/modelValidatorAdminStatusId';
import { Types } from 'mongoose';

/**
 * modelValidatorAdminStatusId.negative
 *
 * A negative test for modelValidatorAdminStatusId where adminService.hasStatus
 * (from '@datr.tech/leith-common-services') is mocked above, using adminServiceHasStatusMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe('modelValidatorAdminStatusId', () => {
  describe('negative', () => {
    test('should throw the expected error when the underlying adminService (mocked) returns false', async () => {
      /*
       * Arrange
       */
      const errorExpected = 'adminStatusId: invalid';
      const idMock = new Types.ObjectId();
      const docMock = { adminStatusId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      const handler = async () => {
        await modelValidatorAdminStatusId(docMock, nextMock);
      };

      /*
       * Assert
       */
      await expect(handler()).rejects.toThrowError(errorExpected);
      expect(adminServiceHasStatusMock).toHaveBeenCalledTimes(1);
      expect(adminServiceHasStatusMock).toHaveBeenCalledWith(
        expect.objectContaining({ statusId: idMock }),
      );
      expect(nextMock).not.toHaveBeenCalled();
    });
  });
});

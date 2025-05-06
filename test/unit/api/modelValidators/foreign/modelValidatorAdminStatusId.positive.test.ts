const adminServiceHasStatusMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  adminService: {
    hasStatus: adminServiceHasStatusMock,
  },
}));

import { modelValidatorAdminStatusId } from '@app-ap2/api/modelValidators/foreign';
import { Types } from 'mongoose';

/**
 * modelValidatorAdminStatusId.positive
 *
 * A positive test for modelValidatorAdminStatusId where adminService.hasStatus
 * (from '@datr.tech/leith-common-services') is mocked above, using adminServiceHasStatusMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe('modelValidatorAdminStatusId', () => {
  describe('positive', () => {
    test('should not throw an error when the underlying adminService (mocked) returns true', async () => {
      /*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { adminStatusId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      await modelValidatorAdminStatusId(docMock, nextMock);

      /*
       * Assert
       */
      expect(adminServiceHasStatusMock).toHaveBeenCalledTimes(1);
      expect(adminServiceHasStatusMock).toHaveBeenCalledWith(
        expect.objectContaining({ statusId: idMock }),
      );
      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});

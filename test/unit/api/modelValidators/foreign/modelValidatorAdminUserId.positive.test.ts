const adminServiceHasUserMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  personaService: {
    hasUser: adminServiceHasUserMock,
  },
}));

import { modelValidatorAdminUserId } from '@app-ap2/api/modelValidators/foreign/modelValidatorAdminUserId';
import { Types } from 'mongoose';

/**
 * modelValidatorAdminUserId.positive
 *
 * A positive test for modelValidatorAdminUserId where personaService.hasUser
 * (from '@datr.tech/leith-common-services') is mocked above, using adminServiceHasUserMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe('modelValidatorAdminUserId', () => {
  describe('positive', () => {
    test('should not throw an error when the underlying adminService (mocked) returns true', async () => {
      /*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { adminUserId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      await modelValidatorAdminUserId(docMock, nextMock);

      /*
       * Assert
       */
      expect(adminServiceHasUserMock).toHaveBeenCalledTimes(1);
      expect(adminServiceHasUserMock).toHaveBeenCalledWith(
        expect.objectContaining({ userId: idMock }),
      );
      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});

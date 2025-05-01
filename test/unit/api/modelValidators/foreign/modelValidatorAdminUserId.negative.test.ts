const adminServiceHasUserMock = jest.fn().mockReturnValue(false);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  personaService: {
    hasUser: adminServiceHasUserMock,
  },
}));

import { modelValidatorAdminUserId } from '@app-p2/api/modelValidators/foreign';
import { Types } from 'mongoose';

describe('modelValidatorAdminUserId', () => {
  describe('negative', () => {
    test('should throw the expected error when the underlying adminService (mocked) returns false', async () => {
      /*
       * Arrange
       */
      const errorExpected = 'adminUserId: invalid';
      const idMock = new Types.ObjectId();
      const docMock = { adminUserId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      const handler = async () => {
        await modelValidatorAdminUserId(docMock, nextMock);
      };

      /*
       * Assert
       */
      await expect(handler()).rejects.toThrowError(errorExpected);
      expect(adminServiceHasUserMock).toHaveBeenCalledTimes(1);
      expect(adminServiceHasUserMock).toHaveBeenCalledWith(
        expect.objectContaining({ userId: idMock }),
      );
      expect(nextMock).not.toHaveBeenCalled();
    });
  });
});

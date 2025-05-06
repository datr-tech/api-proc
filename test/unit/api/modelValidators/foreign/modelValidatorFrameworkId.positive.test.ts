const entityServiceHasFrameworkMock = jest.fn().mockReturnValue(true);

jest.mock('@datr.tech/leith-common-services', () => ({
  __esModule: true,
  entityService: {
    hasFramework: entityServiceHasFrameworkMock,
  },
}));

import { modelValidatorFrameworkId } from '@app-ap2/api/modelValidators/foreign';
import { Types } from 'mongoose';

/**
 * modelValidatorFrameworkId.positive
 *
 * A positive test for modelValidatorFrameworkId where entityService.hasFramework
 * (from '@datr.tech/leith-common-services') is mocked above, using entityServiceHasFrameworkMock.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
describe('modelValidatorFrameworkId', () => {
  describe('positive', () => {
    test('should not throw an error when the underlying entityService (mocked) returns true', async () => {
      /*
       * Arrange
       */
      const idMock = new Types.ObjectId();
      const docMock = { frameworkId: idMock };
      const nextMock = jest.fn();

      /*
       * Act
       */
      await modelValidatorFrameworkId(docMock, nextMock);

      /*
       * Assert
       */
      expect(entityServiceHasFrameworkMock).toHaveBeenCalledTimes(1);
      expect(entityServiceHasFrameworkMock).toHaveBeenCalledWith(
        expect.objectContaining({ frameworkId: idMock }),
      );
      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});

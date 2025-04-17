import { entityService } from '@freight/common-api-services';

export const modelValidatorFrameworkId = async (doc, next) => {
  let frameworkId;
  let hasFramework = false;

  if (doc && typeof doc.frameworkId !== 'undefined') {
    frameworkId = doc.frameworkId;
  }

  if (frameworkId) {
    hasFramework = await entityService.hasFramework({
      frameworkId,
    });
  }

  if (!hasFramework) {
    throw new Error('frameworkId: invalid');
  }

  next();
};

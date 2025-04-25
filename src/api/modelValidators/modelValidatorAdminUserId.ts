import { personaService } from '@datr.tech/leith-common-services';

export const modelValidatorAdminUserId = async (doc, next) => {
  let adminUserId;
  let hasUser = false;

  if (doc && typeof doc.adminUserId !== 'undefined') {
    adminUserId = doc.adminUserId;
  }

  if (adminUserId) {
    hasUser = await personaService.hasUser({
      userId: adminUserId,
      isAdmin: true,
    });
  }

  if (!hasUser) {
    throw new Error('adminUserId: invalid');
  }

  next();
};

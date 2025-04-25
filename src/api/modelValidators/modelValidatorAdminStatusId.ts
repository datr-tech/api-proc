import { adminService } from '@datr.tech/leith-common-services';

export const modelValidatorAdminStatusId = async (doc, next) => {
  let adminStatusId;
  let hasStatus = false;

  if (doc && typeof doc.adminStatusId !== 'undefined') {
    adminStatusId = doc.adminStatusId;
  }

  if (adminStatusId) {
    hasStatus = await adminService.hasStatus({
      statusId: adminStatusId,
    });
  }

  if (!hasStatus) {
    throw new Error('adminStatusId: invalid');
  }

  next();
};

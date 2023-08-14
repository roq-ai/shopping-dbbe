interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Website Designer'],
  tenantName: 'Organization',
  applicationName: 'shopping',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

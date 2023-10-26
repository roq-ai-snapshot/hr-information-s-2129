interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read employee information',
    'Read vacation information',
    'Read payroll information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage employee data',
    'Manage payroll and vacation details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/68d5c1ff-8941-4c24-9470-8ef0e4535cd6',
};

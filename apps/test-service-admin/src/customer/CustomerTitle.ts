import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "deleted";

export const CustomerTitle = (record: TCustomer): string => {
  return record.deleted?.toString() || String(record.id);
};

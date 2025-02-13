import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  deleted?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

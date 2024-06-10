import { SortOrder } from "../../util/SortOrder";

export type GhostOrderByInput = {
  createdAt?: SortOrder;
  direction?: SortOrder;
  id?: SortOrder;
  isDead?: SortOrder;
  name?: SortOrder;
  speed?: SortOrder;
  updatedAt?: SortOrder;
};

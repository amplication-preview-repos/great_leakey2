import { SortOrder } from "../../util/SortOrder";

export type LevelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  levelData?: SortOrder;
  numberField?: SortOrder;
  updatedAt?: SortOrder;
};

import { GhostWhereInput } from "./GhostWhereInput";
import { GhostOrderByInput } from "./GhostOrderByInput";

export type GhostFindManyArgs = {
  where?: GhostWhereInput;
  orderBy?: Array<GhostOrderByInput>;
  skip?: number;
  take?: number;
};

import { LeafWhereInput } from "./LeafWhereInput";
import { LeafOrderByInput } from "./LeafOrderByInput";

export type LeafFindManyArgs = {
  where?: LeafWhereInput;
  orderBy?: Array<LeafOrderByInput>;
  skip?: number;
  take?: number;
};

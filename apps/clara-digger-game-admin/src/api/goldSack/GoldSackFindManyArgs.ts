import { GoldSackWhereInput } from "./GoldSackWhereInput";
import { GoldSackOrderByInput } from "./GoldSackOrderByInput";

export type GoldSackFindManyArgs = {
  where?: GoldSackWhereInput;
  orderBy?: Array<GoldSackOrderByInput>;
  skip?: number;
  take?: number;
};

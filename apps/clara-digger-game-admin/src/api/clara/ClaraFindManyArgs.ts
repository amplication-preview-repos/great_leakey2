import { ClaraWhereInput } from "./ClaraWhereInput";
import { ClaraOrderByInput } from "./ClaraOrderByInput";

export type ClaraFindManyArgs = {
  where?: ClaraWhereInput;
  orderBy?: Array<ClaraOrderByInput>;
  skip?: number;
  take?: number;
};

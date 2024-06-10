import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LevelWhereInput = {
  id?: StringFilter;
  levelData?: JsonFilter;
  numberField?: IntNullableFilter;
};

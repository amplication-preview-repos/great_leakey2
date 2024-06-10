import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EarthPatchWhereInput = {
  id?: StringFilter;
  positionX?: IntNullableFilter;
  positionY?: IntNullableFilter;
};

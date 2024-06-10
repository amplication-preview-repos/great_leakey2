import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LeafWhereInput = {
  id?: StringFilter;
  positionX?: IntNullableFilter;
  positionY?: IntNullableFilter;
};

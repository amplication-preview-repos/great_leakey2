import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GhostWhereInput = {
  direction?: "Option1";
  id?: StringFilter;
  isDead?: BooleanNullableFilter;
  name?: StringNullableFilter;
  speed?: IntNullableFilter;
};

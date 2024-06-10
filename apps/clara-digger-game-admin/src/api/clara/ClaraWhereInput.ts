import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ClaraWhereInput = {
  currentLevel?: StringNullableFilter;
  direction?: "Option1";
  id?: StringFilter;
  isDead?: BooleanNullableFilter;
  name?: StringNullableFilter;
};

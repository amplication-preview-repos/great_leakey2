import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GoldSackWhereInput = {
  id?: StringFilter;
  isOnGround?: BooleanNullableFilter;
  positionX?: IntNullableFilter;
  positionY?: IntNullableFilter;
  state?: "Option1";
};

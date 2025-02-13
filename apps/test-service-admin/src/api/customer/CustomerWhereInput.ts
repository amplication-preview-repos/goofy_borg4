import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  deleted?: StringNullableFilter;
  id?: StringFilter;
};

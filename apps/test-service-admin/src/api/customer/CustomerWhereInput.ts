import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  cool?: JsonFilter;
  deleted?: StringNullableFilter;
  id?: StringFilter;
};

import { JsonValue } from "type-fest";

export type Customer = {
  cool: JsonValue;
  createdAt: Date;
  deleted: string | null;
  id: string;
  updatedAt: Date;
};

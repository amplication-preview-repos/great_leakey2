import { JsonValue } from "type-fest";

export type Level = {
  createdAt: Date;
  id: string;
  levelData: JsonValue;
  numberField: number | null;
  updatedAt: Date;
};

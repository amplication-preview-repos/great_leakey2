import { Clara as TClara } from "../api/clara/Clara";

export const CLARA_TITLE_FIELD = "name";

export const ClaraTitle = (record: TClara): string => {
  return record.name?.toString() || String(record.id);
};

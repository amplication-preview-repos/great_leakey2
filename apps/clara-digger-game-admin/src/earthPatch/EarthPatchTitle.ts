import { EarthPatch as TEarthPatch } from "../api/earthPatch/EarthPatch";

export const EARTHPATCH_TITLE_FIELD = "id";

export const EarthPatchTitle = (record: TEarthPatch): string => {
  return record.id?.toString() || String(record.id);
};

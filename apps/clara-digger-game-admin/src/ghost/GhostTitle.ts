import { Ghost as TGhost } from "../api/ghost/Ghost";

export const GHOST_TITLE_FIELD = "name";

export const GhostTitle = (record: TGhost): string => {
  return record.name?.toString() || String(record.id);
};

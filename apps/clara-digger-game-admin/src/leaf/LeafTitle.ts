import { Leaf as TLeaf } from "../api/leaf/Leaf";

export const LEAF_TITLE_FIELD = "id";

export const LeafTitle = (record: TLeaf): string => {
  return record.id?.toString() || String(record.id);
};

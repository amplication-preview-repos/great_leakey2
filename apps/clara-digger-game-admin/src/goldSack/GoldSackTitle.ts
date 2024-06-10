import { GoldSack as TGoldSack } from "../api/goldSack/GoldSack";

export const GOLDSACK_TITLE_FIELD = "id";

export const GoldSackTitle = (record: TGoldSack): string => {
  return record.id?.toString() || String(record.id);
};

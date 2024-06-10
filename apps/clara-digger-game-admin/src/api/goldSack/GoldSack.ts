export type GoldSack = {
  createdAt: Date;
  id: string;
  isOnGround: boolean | null;
  positionX: number | null;
  positionY: number | null;
  state?: "Option1" | null;
  updatedAt: Date;
};

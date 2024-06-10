import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoldSackServiceBase } from "./base/goldSack.service.base";

@Injectable()
export class GoldSackService extends GoldSackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

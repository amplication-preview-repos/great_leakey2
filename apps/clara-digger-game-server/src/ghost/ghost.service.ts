import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GhostServiceBase } from "./base/ghost.service.base";

@Injectable()
export class GhostService extends GhostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

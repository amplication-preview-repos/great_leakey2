import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeafServiceBase } from "./base/leaf.service.base";

@Injectable()
export class LeafService extends LeafServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

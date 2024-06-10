import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClaraServiceBase } from "./base/clara.service.base";

@Injectable()
export class ClaraService extends ClaraServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EarthPatchServiceBase } from "./base/earthPatch.service.base";

@Injectable()
export class EarthPatchService extends EarthPatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

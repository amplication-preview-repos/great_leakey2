import { Module } from "@nestjs/common";
import { LeafModuleBase } from "./base/leaf.module.base";
import { LeafService } from "./leaf.service";
import { LeafController } from "./leaf.controller";
import { LeafResolver } from "./leaf.resolver";

@Module({
  imports: [LeafModuleBase],
  controllers: [LeafController],
  providers: [LeafService, LeafResolver],
  exports: [LeafService],
})
export class LeafModule {}

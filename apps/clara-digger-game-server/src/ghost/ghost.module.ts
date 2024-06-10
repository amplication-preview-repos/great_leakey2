import { Module } from "@nestjs/common";
import { GhostModuleBase } from "./base/ghost.module.base";
import { GhostService } from "./ghost.service";
import { GhostController } from "./ghost.controller";
import { GhostResolver } from "./ghost.resolver";

@Module({
  imports: [GhostModuleBase],
  controllers: [GhostController],
  providers: [GhostService, GhostResolver],
  exports: [GhostService],
})
export class GhostModule {}

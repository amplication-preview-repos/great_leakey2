import { Module } from "@nestjs/common";
import { GoldSackModuleBase } from "./base/goldSack.module.base";
import { GoldSackService } from "./goldSack.service";
import { GoldSackController } from "./goldSack.controller";
import { GoldSackResolver } from "./goldSack.resolver";

@Module({
  imports: [GoldSackModuleBase],
  controllers: [GoldSackController],
  providers: [GoldSackService, GoldSackResolver],
  exports: [GoldSackService],
})
export class GoldSackModule {}

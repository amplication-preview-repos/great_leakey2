import { Module } from "@nestjs/common";
import { EarthPatchModuleBase } from "./base/earthPatch.module.base";
import { EarthPatchService } from "./earthPatch.service";
import { EarthPatchController } from "./earthPatch.controller";
import { EarthPatchResolver } from "./earthPatch.resolver";

@Module({
  imports: [EarthPatchModuleBase],
  controllers: [EarthPatchController],
  providers: [EarthPatchService, EarthPatchResolver],
  exports: [EarthPatchService],
})
export class EarthPatchModule {}

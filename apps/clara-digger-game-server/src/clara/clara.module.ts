import { Module } from "@nestjs/common";
import { ClaraModuleBase } from "./base/clara.module.base";
import { ClaraService } from "./clara.service";
import { ClaraController } from "./clara.controller";
import { ClaraResolver } from "./clara.resolver";

@Module({
  imports: [ClaraModuleBase],
  controllers: [ClaraController],
  providers: [ClaraService, ClaraResolver],
  exports: [ClaraService],
})
export class ClaraModule {}

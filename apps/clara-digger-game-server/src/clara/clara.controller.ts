import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClaraService } from "./clara.service";
import { ClaraControllerBase } from "./base/clara.controller.base";

@swagger.ApiTags("claras")
@common.Controller("claras")
export class ClaraController extends ClaraControllerBase {
  constructor(protected readonly service: ClaraService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GhostService } from "./ghost.service";
import { GhostControllerBase } from "./base/ghost.controller.base";

@swagger.ApiTags("ghosts")
@common.Controller("ghosts")
export class GhostController extends GhostControllerBase {
  constructor(protected readonly service: GhostService) {
    super(service);
  }
}

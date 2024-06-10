import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeafService } from "./leaf.service";
import { LeafControllerBase } from "./base/leaf.controller.base";

@swagger.ApiTags("leaves")
@common.Controller("leaves")
export class LeafController extends LeafControllerBase {
  constructor(protected readonly service: LeafService) {
    super(service);
  }
}

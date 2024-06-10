import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoldSackService } from "./goldSack.service";
import { GoldSackControllerBase } from "./base/goldSack.controller.base";

@swagger.ApiTags("goldSacks")
@common.Controller("goldSacks")
export class GoldSackController extends GoldSackControllerBase {
  constructor(protected readonly service: GoldSackService) {
    super(service);
  }
}

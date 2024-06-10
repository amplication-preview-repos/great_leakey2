import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EarthPatchService } from "./earthPatch.service";
import { EarthPatchControllerBase } from "./base/earthPatch.controller.base";

@swagger.ApiTags("earthPatches")
@common.Controller("earthPatches")
export class EarthPatchController extends EarthPatchControllerBase {
  constructor(protected readonly service: EarthPatchService) {
    super(service);
  }
}

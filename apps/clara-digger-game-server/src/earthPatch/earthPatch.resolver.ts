import * as graphql from "@nestjs/graphql";
import { EarthPatchResolverBase } from "./base/earthPatch.resolver.base";
import { EarthPatch } from "./base/EarthPatch";
import { EarthPatchService } from "./earthPatch.service";

@graphql.Resolver(() => EarthPatch)
export class EarthPatchResolver extends EarthPatchResolverBase {
  constructor(protected readonly service: EarthPatchService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { GhostResolverBase } from "./base/ghost.resolver.base";
import { Ghost } from "./base/Ghost";
import { GhostService } from "./ghost.service";

@graphql.Resolver(() => Ghost)
export class GhostResolver extends GhostResolverBase {
  constructor(protected readonly service: GhostService) {
    super(service);
  }
}

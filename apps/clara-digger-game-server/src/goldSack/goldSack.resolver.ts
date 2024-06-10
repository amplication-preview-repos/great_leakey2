import * as graphql from "@nestjs/graphql";
import { GoldSackResolverBase } from "./base/goldSack.resolver.base";
import { GoldSack } from "./base/GoldSack";
import { GoldSackService } from "./goldSack.service";

@graphql.Resolver(() => GoldSack)
export class GoldSackResolver extends GoldSackResolverBase {
  constructor(protected readonly service: GoldSackService) {
    super(service);
  }
}

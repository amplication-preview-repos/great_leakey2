import * as graphql from "@nestjs/graphql";
import { LeafResolverBase } from "./base/leaf.resolver.base";
import { Leaf } from "./base/Leaf";
import { LeafService } from "./leaf.service";

@graphql.Resolver(() => Leaf)
export class LeafResolver extends LeafResolverBase {
  constructor(protected readonly service: LeafService) {
    super(service);
  }
}

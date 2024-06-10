import * as graphql from "@nestjs/graphql";
import { ClaraResolverBase } from "./base/clara.resolver.base";
import { Clara } from "./base/Clara";
import { ClaraService } from "./clara.service";

@graphql.Resolver(() => Clara)
export class ClaraResolver extends ClaraResolverBase {
  constructor(protected readonly service: ClaraService) {
    super(service);
  }
}

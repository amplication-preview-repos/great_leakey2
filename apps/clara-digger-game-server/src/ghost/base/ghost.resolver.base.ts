/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Ghost } from "./Ghost";
import { GhostCountArgs } from "./GhostCountArgs";
import { GhostFindManyArgs } from "./GhostFindManyArgs";
import { GhostFindUniqueArgs } from "./GhostFindUniqueArgs";
import { CreateGhostArgs } from "./CreateGhostArgs";
import { UpdateGhostArgs } from "./UpdateGhostArgs";
import { DeleteGhostArgs } from "./DeleteGhostArgs";
import { GhostService } from "../ghost.service";
@graphql.Resolver(() => Ghost)
export class GhostResolverBase {
  constructor(protected readonly service: GhostService) {}

  async _ghostsMeta(
    @graphql.Args() args: GhostCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Ghost])
  async ghosts(@graphql.Args() args: GhostFindManyArgs): Promise<Ghost[]> {
    return this.service.ghosts(args);
  }

  @graphql.Query(() => Ghost, { nullable: true })
  async ghost(
    @graphql.Args() args: GhostFindUniqueArgs
  ): Promise<Ghost | null> {
    const result = await this.service.ghost(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Ghost)
  async createGhost(@graphql.Args() args: CreateGhostArgs): Promise<Ghost> {
    return await this.service.createGhost({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Ghost)
  async updateGhost(
    @graphql.Args() args: UpdateGhostArgs
  ): Promise<Ghost | null> {
    try {
      return await this.service.updateGhost({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ghost)
  async deleteGhost(
    @graphql.Args() args: DeleteGhostArgs
  ): Promise<Ghost | null> {
    try {
      return await this.service.deleteGhost(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
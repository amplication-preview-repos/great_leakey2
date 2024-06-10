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
import { Leaf } from "./Leaf";
import { LeafCountArgs } from "./LeafCountArgs";
import { LeafFindManyArgs } from "./LeafFindManyArgs";
import { LeafFindUniqueArgs } from "./LeafFindUniqueArgs";
import { CreateLeafArgs } from "./CreateLeafArgs";
import { UpdateLeafArgs } from "./UpdateLeafArgs";
import { DeleteLeafArgs } from "./DeleteLeafArgs";
import { LeafService } from "../leaf.service";
@graphql.Resolver(() => Leaf)
export class LeafResolverBase {
  constructor(protected readonly service: LeafService) {}

  async _leavesMeta(
    @graphql.Args() args: LeafCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Leaf])
  async leaves(@graphql.Args() args: LeafFindManyArgs): Promise<Leaf[]> {
    return this.service.leaves(args);
  }

  @graphql.Query(() => Leaf, { nullable: true })
  async leaf(@graphql.Args() args: LeafFindUniqueArgs): Promise<Leaf | null> {
    const result = await this.service.leaf(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Leaf)
  async createLeaf(@graphql.Args() args: CreateLeafArgs): Promise<Leaf> {
    return await this.service.createLeaf({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Leaf)
  async updateLeaf(@graphql.Args() args: UpdateLeafArgs): Promise<Leaf | null> {
    try {
      return await this.service.updateLeaf({
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

  @graphql.Mutation(() => Leaf)
  async deleteLeaf(@graphql.Args() args: DeleteLeafArgs): Promise<Leaf | null> {
    try {
      return await this.service.deleteLeaf(args);
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
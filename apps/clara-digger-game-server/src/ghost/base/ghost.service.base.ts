/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Ghost as PrismaGhost } from "@prisma/client";

export class GhostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GhostCountArgs, "select">): Promise<number> {
    return this.prisma.ghost.count(args);
  }

  async ghosts<T extends Prisma.GhostFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GhostFindManyArgs>
  ): Promise<PrismaGhost[]> {
    return this.prisma.ghost.findMany<Prisma.GhostFindManyArgs>(args);
  }
  async ghost<T extends Prisma.GhostFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GhostFindUniqueArgs>
  ): Promise<PrismaGhost | null> {
    return this.prisma.ghost.findUnique(args);
  }
  async createGhost<T extends Prisma.GhostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GhostCreateArgs>
  ): Promise<PrismaGhost> {
    return this.prisma.ghost.create<T>(args);
  }
  async updateGhost<T extends Prisma.GhostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GhostUpdateArgs>
  ): Promise<PrismaGhost> {
    return this.prisma.ghost.update<T>(args);
  }
  async deleteGhost<T extends Prisma.GhostDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GhostDeleteArgs>
  ): Promise<PrismaGhost> {
    return this.prisma.ghost.delete(args);
  }
}
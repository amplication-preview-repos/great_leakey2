/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Level as PrismaLevel } from "@prisma/client";

export class LevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LevelCountArgs, "select">): Promise<number> {
    return this.prisma.level.count(args);
  }

  async levels<T extends Prisma.LevelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LevelFindManyArgs>
  ): Promise<PrismaLevel[]> {
    return this.prisma.level.findMany<Prisma.LevelFindManyArgs>(args);
  }
  async level<T extends Prisma.LevelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LevelFindUniqueArgs>
  ): Promise<PrismaLevel | null> {
    return this.prisma.level.findUnique(args);
  }
  async createLevel<T extends Prisma.LevelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LevelCreateArgs>
  ): Promise<PrismaLevel> {
    return this.prisma.level.create<T>(args);
  }
  async updateLevel<T extends Prisma.LevelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LevelUpdateArgs>
  ): Promise<PrismaLevel> {
    return this.prisma.level.update<T>(args);
  }
  async deleteLevel<T extends Prisma.LevelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LevelDeleteArgs>
  ): Promise<PrismaLevel> {
    return this.prisma.level.delete(args);
  }
}
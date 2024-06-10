/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumGhostDirection } from "./EnumGhostDirection";
import {
  IsEnum,
  IsOptional,
  IsBoolean,
  IsString,
  IsInt,
} from "class-validator";

@InputType()
class GhostUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumGhostDirection,
  })
  @IsEnum(EnumGhostDirection)
  @IsOptional()
  @Field(() => EnumGhostDirection, {
    nullable: true,
  })
  direction?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDead?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  speed?: number | null;
}

export { GhostUpdateInput as GhostUpdateInput };
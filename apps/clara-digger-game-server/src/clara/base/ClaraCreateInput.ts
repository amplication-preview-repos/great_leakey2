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
import { IsString, IsOptional, IsEnum, IsBoolean } from "class-validator";
import { EnumClaraDirection } from "./EnumClaraDirection";

@InputType()
class ClaraCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentLevel?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumClaraDirection,
  })
  @IsEnum(EnumClaraDirection)
  @IsOptional()
  @Field(() => EnumClaraDirection, {
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
}

export { ClaraCreateInput as ClaraCreateInput };

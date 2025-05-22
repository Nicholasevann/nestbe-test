/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @Length(1, 10, { groups: ['create'] })
  @Length(5, 10, { groups: ['update'] })
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  area: string;
}

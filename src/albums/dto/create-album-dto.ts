import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly songs?: string[];
}

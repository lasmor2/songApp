import { IsString, IsNotEmpty, IsDateString, IsMongoId } from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  releasedDate: Date;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsString()
  @IsNotEmpty()
  lyrics: string;

  @IsMongoId()
  album: string;
}

import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  artist: string;

  @IsNotEmpty()
  @IsDateString()
  releasedDate?: Date;

  @IsNotEmpty()
  @IsMilitaryTime()
  duration: Date;
}

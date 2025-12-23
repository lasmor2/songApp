import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import { Song } from './schemas/songs';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create(
    @Body()
    createSongDTO: CreateSongDTO,
  ) {
    return this.songService.create(createSongDTO);
  }

  @Get()
  find(): Promise<Song[]> {
    return this.songService.find();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string,
  ): Promise<Song | null> {
    return this.songService.findById(id);
  }

  @Delete(':id')
  delete(
    @Param('id')
    id: string,
  ) {
    return this.songService.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id')
    id: string,
    @Body()
    createSongDTO: CreateSongDTO,
  ) {
    return this.songService.update(id, createSongDTO);
  }
}

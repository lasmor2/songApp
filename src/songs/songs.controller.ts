import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  HttpException,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UpdateWriteOpResult } from 'mongoose';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { SongsService } from './songs.service';
import { Song } from './schemas/songs';
import { ParseObjectIdPipe } from '../common/pipes/parse-object-id.pipe';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  async create(
    @Body()
    createSongDTO: CreateSongDTO,
  ) {
    try {
      return await this.songService.create(createSongDTO);
    } catch (error) {
      throw new BadRequestException('Failed to create song');
    }
  }

  @Get()
  async find(): Promise<Song[]> {
    try {
      return await this.songService.find();
    } catch (error) {
      throw new HttpException(
        'Failed to fetch songs',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseObjectIdPipe)
    id: string,
  ): Promise<Song> {
    try {
      const song = await this.songService.findById(id);
      if (!song) {
        throw new NotFoundException('Song not found');
      }
      return song;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch song',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseObjectIdPipe)
    id: string,
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    try {
      const result = await this.songService.delete(id);
      if (result.deletedCount === 0) {
        throw new NotFoundException('Song not found');
      }
      return result;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException(
        'Failed to delete song',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseObjectIdPipe)
    id: string,
    @Body()
    updateSongDTO: UpdateSongDTO,
  ): Promise<UpdateWriteOpResult> {
    try {
      const result = await this.songService.update(id, updateSongDTO);
      if (result.matchedCount === 0) {
        throw new NotFoundException('Song not found');
      }
      return result;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException(
        'Failed to update song',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

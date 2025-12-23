import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { Song, SongDocument } from './schemas/songs';
import { Model, UpdateWriteOpResult, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) //1
    private readonly songModel: Model<SongDocument>, //2
  ) {}
  async create(createSongDTO: CreateSongDTO): Promise<Song> {
    if (!Types.ObjectId.isValid(createSongDTO.album)) {
      throw new BadRequestException('Invalid album ID');
    }
    const songData = {
      ...createSongDTO,
      album: new Types.ObjectId(createSongDTO.album)
    };
    const song = await this.songModel.create(songData);
    return song;
  }
  async find(): Promise<Song[]> {
    return this.songModel.find();
  }

  async findById(id: string): Promise<Song | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid song ID');
    }
    return this.songModel.findById(id);
  }

  async delete(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid song ID');
    }
    return this.songModel.deleteOne({ _id: id });
  }

  async update(id: string, updateSongDTO: UpdateSongDTO): Promise<UpdateWriteOpResult> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid song ID');
    }
    const updateData = { ...updateSongDTO } as any;
    if (updateSongDTO.album) {
      if (!Types.ObjectId.isValid(updateSongDTO.album)) {
        throw new BadRequestException('Invalid album ID');
      }
      updateData.album = new Types.ObjectId(updateSongDTO.album);
    }
    return this.songModel.updateOne({ _id: id }, updateData);
  }
}

import { Injectable } from '@nestjs/common';
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
    const songData = {
      ...createSongDTO,
      album: new Types.ObjectId(createSongDTO.album)
    };
    const song = await this.songModel.create(songData); //3.
    return song;
  }
  async find(): Promise<Song[]> {
    return this.songModel.find();
  }

  async findById(id: string): Promise<Song | null> {
    return this.songModel.findById(id);
  }

  async delete(id: string) {
    return this.songModel.deleteOne({ _id: id });
  }

  async update(id: string, updateSongDTO: UpdateSongDTO): Promise<UpdateWriteOpResult> {
    return this.songModel.updateOne({ _id: id }, updateSongDTO);
  }
}

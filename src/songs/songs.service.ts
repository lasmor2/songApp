import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';
import { Song, SongDocument } from './schemas/songs';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) //1
    private readonly songModel: Model<SongDocument>, //2
  ) {}
  async create(createSongDTO: CreateSongDTO): Promise<Song> {
    const song = await this.songModel.create(createSongDTO); //3.
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

  async update(id: string, createSongDTO: CreateSongDTO) {
    return this.songModel.updateOne({ _id: id }, createSongDTO);
  }
}

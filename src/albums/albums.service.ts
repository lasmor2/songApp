import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { Album, AlbumDocument } from './schemas/albums';
import { Song } from 'src/songs/schemas/songs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name)
    private readonly albumModel: Model<AlbumDocument>,
  ) {}
  async createAlbum(createAlbumDTO: CreateAlbumDTO): Promise<Album> {
    const albumData = {
      ...createAlbumDTO,
      songs: createAlbumDTO.songs.map(id => new Types.ObjectId(id))
    };
    return this.albumModel.create(albumData);
  }
  async findAlbums() {
    return this.albumModel.find().populate('songs', null, Song.name); //1
  }
}

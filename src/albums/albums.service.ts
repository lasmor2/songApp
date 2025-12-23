import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAlbumDto } from './dto/create-album-dto';
import { Album, AlbumDocument } from './schemas/albums';
import { Song } from 'src/songs/schemas/songs';
import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name)
    private readonly albumModel: Model<AlbumDocument>,
  ) {}
  async createAlbum(createAlbumDTO: CreateAlbumDto): Promise<Album> {
    try {
      const albumData = {
        ...createAlbumDTO,
        songs: createAlbumDTO.songs ? createAlbumDTO.songs.map((id) => {
          if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException(`Invalid song ID: ${id}`);
          }
          return new Types.ObjectId(id);
        }) : [],
      };
      return await this.albumModel.create(albumData);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create album');
    }
  }
  async findAlbums(): Promise<Album[]> {
    try {
      return await this.albumModel.find().populate('songs', null, Song.name);
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch albums');
    }
  }
  async findAlbumById(id: string): Promise<Album> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid album ID');
    }
    const album = await this.albumModel.findById(id).populate('songs', null, Song.name);
    if (!album) {
      throw new BadRequestException('Album not found');
    }
    return album;
  }
}

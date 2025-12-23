import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album-dto';
import { AlbumService } from './albums.service';
import { Album } from './schemas/albums';
@Controller('albums')
export class AlbumController {
  constructor(private albumService: AlbumService) {}
  @Post()
  create(
    @Body()
    createAlbumDTO: CreateAlbumDto,
  ): Promise<Album> {
    return this.albumService.createAlbum(createAlbumDTO);
  }
  @Get()
  find(): Promise<Album[]> {
    return this.albumService.findAlbums();
  }
  @Get(':id')
  findById(@Param('id') id: string): Promise<Album> {
    return this.albumService.findAlbumById(id);
  }
}

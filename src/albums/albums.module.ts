import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './schemas/albums';
import { AlbumService } from './albums.service';
import { AlbumController } from './albums.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
  ],
  providers: [AlbumService],
  controllers: [AlbumController],
})
export class AlbumsModule {}

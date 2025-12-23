import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
import { Song } from 'src/songs/schemas/songs';
export type AlbumDocument = HydratedDocument<Album>;
@Schema()
export class Album {
  @Prop({
    required: true,
  })
  title: string;
  @Prop({ type: [Types.ObjectId], ref: 'Song' })
  songs: Types.ObjectId[];
}
export const AlbumSchema = SchemaFactory.createForClass(Album);

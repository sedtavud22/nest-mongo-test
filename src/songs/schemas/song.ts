import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Album } from 'src/albums/schemas/album';

export type SongDocument = HydratedDocument<Song>;

@Schema()
export class Song {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  releasedDate: Date;

  @Prop({
    required: true,
  })
  duration: string;

  @Prop()
  lyrics: string;

  @Prop({ type: Types.ObjectId, ref: Album.name })
  album: Album;
}

export const SongSchema = SchemaFactory.createForClass(Song);

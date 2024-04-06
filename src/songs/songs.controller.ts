import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Post()
  create(
    @Body()
    createSongDTO: CreateSongDTO,
  ) {
    return this.songService.create(createSongDTO);
  }

  @Get()
  find() {
    return this.songService.find();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.songService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songService.delete(id);
  }
}

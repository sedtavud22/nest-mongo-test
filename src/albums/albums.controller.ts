import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDTO } from './dto/create-album.dto';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}

  @Post()
  create(@Body() createAlbumDTO: CreateAlbumDTO) {
    return this.albumService.createAlbum(createAlbumDTO);
  }

  @Get()
  find() {
    return this.albumService.findAlbums();
  }
}

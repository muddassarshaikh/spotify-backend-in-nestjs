import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  create(@Body() body: { title: string; artist: string }) {
    return this.songsService.create(body);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return { message: 'Song details' };
  }

  @Put(':id')
  update() {
    return { message: 'Song updated successfully' };
  }

  @Delete(':id')
  remove() {
    return { message: 'Song deleted successfully' };
  }
}

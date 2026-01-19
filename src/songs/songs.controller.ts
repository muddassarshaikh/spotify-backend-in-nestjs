import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  create(@Body() songDetails: CreateSongDto) {
    return this.songsService.create(songDetails);
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

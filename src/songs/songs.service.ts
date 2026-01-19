import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: { title: string; artist: string }[] = [];

  create(song: { title: string; artist: string }) {
    this.songs.push(song);
  }

  findAll() {
    return this.songs;
  }

  findOne(id: number) {
    return this.songs[id];
  }

  remove(id: number) {
    this.songs.splice(id, 1);
    return { message: 'Song deleted successfully' };
  }
}

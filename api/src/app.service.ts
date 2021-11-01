import { Injectable } from '@nestjs/common';
import * as emojis from 'emoji.json';
import { Emoji } from './emoji';

@Injectable()
export class AppService {
  fetchAll(): Emoji[] {
    return emojis;
  }

  fetchManyRandom(total = 5) {
    const emojis = [];
    for (let i = 0; i < total; i++) {
      emojis.push(this.fetchSingleRandom());
    }
    return emojis;
  }

  fetchSingleRandom() {
    const allEmojis = this.fetchAll();
    return allEmojis[Math.round(Math.random() * allEmojis.length)];
  }
}

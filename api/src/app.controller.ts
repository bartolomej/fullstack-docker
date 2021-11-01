import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.fetchAll();
  }

  @Get('random')
  getRandom() {
    return this.appService.fetchSingleRandom();
  }
}

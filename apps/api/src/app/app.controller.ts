import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getData(): string {
    return 'Welcome to the TodoList API';
  }
}

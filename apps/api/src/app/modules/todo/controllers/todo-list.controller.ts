import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
// eslint-disable-next-line import/no-unresolved
import { DataMessage } from '@todo-list-app/api-interfaces';
import {
  CreateTodoListDto,
  TodoListEntity,
  UpdateTodoListDto,
  // eslint-disable-next-line import/no-unresolved
} from '@todo-list-app/models';
import { TodoListService } from '../services/todo-list.service';

@Controller('todo-lists')
export class TodoListController {
  constructor(public service: TodoListService) {}

  @Post()
  async createOne(
    @Body() createDto: CreateTodoListDto,
  ): Promise<DataMessage<TodoListEntity>> {
    const savedEntity = await this.service.createOne(createDto);
    return {
      message: 'Todo list has been successfully created',
      data: [savedEntity],
    };
  }

  @Get()
  async getAll(): Promise<DataMessage<TodoListEntity>> {
    return {
      message: 'Todo lists successfully fetched',
      data: await this.service.findAll(),
    };
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<DataMessage<TodoListEntity>> {
    return {
      message: `Todo list n°${id} successfully fetched`,
      data: [await this.service.findOne(id)],
    };
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: number,
    @Body() updateTodoListDto: UpdateTodoListDto,
  ): Promise<DataMessage<TodoListEntity>> {
    return {
      message: `Todo list n°${id} successfully updated`,
      data: [await this.service.updateOne(id, updateTodoListDto)],
    };
  }

  @Delete(':id')
  async deleteOne(
    @Param('id') id: number,
  ): Promise<DataMessage<TodoListEntity>> {
    return {
      message: `Todo list n°${id} successfully deleted`,
      data: [await this.service.deleteOne(id)],
    };
  }
}

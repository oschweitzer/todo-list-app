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
  CreateTodoListItemDto,
  TodoListItemEntity,
  UpdateTodoListItemDto,
  // eslint-disable-next-line import/no-unresolved
} from '@todo-list-app/models';
import { TodoListItemService } from '../services/todo-list-item.service';

@Controller('todo-list-items')
export class TodoListItemController {
  constructor(public service: TodoListItemService) {}

  @Post()
  async createOne(
    @Body() createDto: CreateTodoListItemDto,
  ): Promise<DataMessage<TodoListItemEntity>> {
    const savedEntity = await this.service.createOne(createDto);
    return {
      message: 'Todo list item has been successfully created',
      data: [savedEntity],
    };
  }

  @Get()
  async getAll(): Promise<DataMessage<TodoListItemEntity>> {
    return {
      message: 'Todo list items successfully fetched',
      data: await this.service.findAll(),
    };
  }

  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ): Promise<DataMessage<TodoListItemEntity>> {
    return {
      message: `Todo list item n°${id} successfully fetched`,
      data: [await this.service.findOne(id)],
    };
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: number,
    @Body() updateDto: UpdateTodoListItemDto,
  ): Promise<DataMessage<TodoListItemEntity>> {
    return {
      message: `Todo list item n°${id} successfully updated`,
      data: [await this.service.updateOne(id, updateDto)],
    };
  }

  @Delete(':id')
  async deleteOne(
    @Param('id') id: number,
  ): Promise<DataMessage<TodoListItemEntity>> {
    return {
      message: `Todo list item n°${id} successfully deleted`,
      data: [await this.service.deleteOne(id)],
    };
  }
}

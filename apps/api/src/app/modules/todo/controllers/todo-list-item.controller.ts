import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DataMessage } from '@todo-list-app/api-interfaces';
import { CreateTodoListItemDto, TodoListItemEntity, UpdateTodoListItemDto } from '@todo-list-app/models';
import { TodoListItemService } from '../services/todo-list-item.service';

@Controller('todo-list-items')
export class TodoListItemController {
  constructor(public service: TodoListItemService) {}

  @Post()
  async createOne(@Body() createDto: CreateTodoListItemDto) {
    const savedEntity = await this.service.createOne(createDto);
    return {
      message: 'Todo list item has been successfully created',
      data: [ savedEntity ],
    } as DataMessage<TodoListItemEntity>;
  }

  @Get()
  async getAll() {
    return {
      message: 'Todo list items successfully fetched',
      data: await this.service.findAll(),
    } as DataMessage<TodoListItemEntity>;
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return {
      message: `Todo list item n°${id} successfully fetched`,
      data: [ await this.service.findOne(id) ],
    } as DataMessage<TodoListItemEntity>;
  }

  @Patch(':id')
  async updateOne(@Param('id') id: number, @Body() updateDto: UpdateTodoListItemDto) {
    return {
      message: `Todo list item n°${id} successfully updated`,
      data: [ await this.service.updateOne(id, updateDto) ]
    } as DataMessage<TodoListItemEntity>;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    return {
      message: `Todo list item n°${id} successfully deleted`,
      data: [ await this.service.deleteOne(id) ]
    } as DataMessage<TodoListItemEntity>;
  }
}

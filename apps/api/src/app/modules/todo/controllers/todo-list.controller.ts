import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DataMessage } from '@todo-list-app/api-interfaces';
import { CreateTodoListDto, TodoListEntity, UpdateTodoListDto } from '@todo-list-app/models';
import { TodoListService } from '../services/todo-list.service';

@Controller('todo-lists')
export class TodoListController {
  constructor(public service: TodoListService) {}

  @Post()
  async createOne(@Body() createDto: CreateTodoListDto) {
    const savedEntity = await this.service.createOne(createDto);
    return {
      message: 'Todo list has been successfully created',
      data: [ savedEntity ],
    } as DataMessage<TodoListEntity>;
  }

  @Get()
  async getAll() {
    return {
      message: 'Todo lists successfully fetched',
      data: await this.service.findAll(),
    } as DataMessage<TodoListEntity>;
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return {
      message: `Todo list n°${id} successfully fetched`,
      data: [ await this.service.findOne(id) ],
    } as DataMessage<TodoListEntity>;
  }

  @Patch(':id')
  async updateOne(@Param('id') id: number, @Body() updateTodoListDto: UpdateTodoListDto) {
    return {
      message: `Todo list n°${id} successfully updated`,
      data: [ await this.service.updateOne(id, updateTodoListDto) ]
    } as DataMessage<TodoListEntity>;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    return {
      message: `Todo list n°${id} successfully deleted`,
      data: [ await this.service.deleteOne(id) ]
    } as DataMessage<TodoListEntity>;
  }


}

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
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto,
  // eslint-disable-next-line import/no-unresolved
} from '@todo-list-app/models';
import { CategoryService } from '../services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createOne(
    @Body() createDto: CreateCategoryDto,
  ): Promise<DataMessage<CategoryEntity>> {
    return {
      message: 'Category has been successfully created',
      data: [await this.categoryService.createOne(createDto)],
    };
  }

  @Get()
  async getAll(): Promise<DataMessage<CategoryEntity>> {
    return {
      message: 'Categories successfully fetched',
      data: await this.categoryService.findAll(),
    };
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<DataMessage<CategoryEntity>> {
    return {
      message: `Category n°${id} successfully fetched`,
      data: [await this.categoryService.findOne(id)],
    };
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<DataMessage<CategoryEntity>> {
    return {
      message: `Category n°${id} successfully updated`,
      data: [await this.categoryService.updateOne(id, updateCategoryDto)],
    };
  }

  @Delete(':id')
  async deleteOne(
    @Param('id') id: number,
  ): Promise<DataMessage<CategoryEntity>> {
    return {
      message: `Category n°${id} successfully deleted`,
      data: [await this.categoryService.deleteOne(id)],
    };
  }
}

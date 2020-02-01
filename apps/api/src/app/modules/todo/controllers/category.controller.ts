import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DataMessage } from '@todo-list-app/api-interfaces';
import { CategoryEntity, CreateCategoryDto, UpdateCategoryDto } from '@todo-list-app/models';
import { CategoryService } from '../services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createOne(@Body() createDto: CreateCategoryDto) {
    const savedEntity = await this.categoryService.createOne(createDto);
    return {
      message: 'Category has been successfully created',
      data: [ savedEntity ],
    } as DataMessage<CategoryEntity>;
  }

  @Get()
  async getAll() {
    return {
      message: 'Categories successfully fetched',
      data: await this.categoryService.findAll(),
    } as DataMessage<CategoryEntity>;
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return {
      message: `Category n°${id} successfully fetched`,
      data: [ await this.categoryService.findOne(id) ],
    } as DataMessage<CategoryEntity>;
  }

  @Patch(':id')
  async updateOne(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return {
      message: `Category n°${id} successfully updated`,
      data: [ await this.categoryService.updateOne(id, updateCategoryDto) ]
    } as DataMessage<CategoryEntity>;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    return {
      message: `Category n°${id} successfully deleted`,
      data: [ await this.categoryService.deleteOne(id) ]
    } as DataMessage<CategoryEntity>;
  }
}

import { NotFoundException } from '@nestjs/common';
import { DeepPartial, ObjectLiteral, Repository } from 'typeorm';

export class CrudService<T extends Repository<U>, U extends ObjectLiteral> {
  constructor(private readonly repository: T) {}

  async createOne(data: DeepPartial<U>): Promise<U> {
    return await this.repository.save(data);
  }

  async findOne(id: number): Promise<U> {
    const record = await this.repository.findOne(id);
    if (record == null) {
      throw new NotFoundException(`Record n°${id} not found`);
    } else {
      return record;
    }
  }

  async findAll(filter: {} = null): Promise<U[]> {
    const condition = filter
      ? {
          where: filter,
        }
      : null;
    return await this.repository.find(condition);
  }

  async updateOne(id: number, changes: DeepPartial<U>): Promise<U> {
    const entityToUpdate = await this.findOne(id);
    return await this.repository.save(
      this.repository.merge(entityToUpdate, changes),
    );
  }

  async deleteOne(id: number): Promise<U> {
    const record = await this.findOne(id);
    return await this.repository.remove(record);
  }
}

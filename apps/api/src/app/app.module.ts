import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {getMetadataArgsStorage} from 'typeorm';
import {AppController} from './app.controller';
import {TodoModule} from './modules/todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'todo',
      entities:  getMetadataArgsStorage().tables.map(tbl => tbl.target), // https://github.com/nrwl/nx/issues/1393#issuecomment-526135967
      synchronize: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

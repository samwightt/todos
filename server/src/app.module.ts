import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelayModule } from './relay/relay.module';
import { DaysModule } from './days/days.module';

import configuration from './config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), '../schema.graphql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'todos',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    TasksModule,
    RelayModule,
    DaysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

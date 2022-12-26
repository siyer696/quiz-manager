import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { typeOrmConfig } from './config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';


@Module({
  imports: [QuizModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'bob',
    password: 'admin',
    database: 'quiz',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

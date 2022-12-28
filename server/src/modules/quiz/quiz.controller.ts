import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  @HttpCode(200)
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    console.log('Inside createQuiz controller');
    return await this.quizService.createNewQuiz(quizData);
  }
}

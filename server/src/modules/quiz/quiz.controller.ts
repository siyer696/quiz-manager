import { Body, Controller, Get, HttpCode, HttpStatus, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { createQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/')
  @HttpCode(200)
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: createQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }
}

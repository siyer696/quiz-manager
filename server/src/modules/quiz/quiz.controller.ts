import { Body, Controller, Get, HttpCode, HttpStatus, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { createQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: createQuizDto) {
    return { data: quizData };
  }
}

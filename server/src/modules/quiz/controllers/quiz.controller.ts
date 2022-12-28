import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  @HttpCode(200)
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }


  @Get('/:id')
  getQuizById(@Param('id', ParseIntPipe) id: number){
    return this.quizService.getQuizById(id);
  }

  @Post('/create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    console.log('Inside createQuiz controller');
    return await this.quizService.createNewQuiz(quizData);
  }
}

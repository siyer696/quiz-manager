import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post('')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    return await this.questionService.createNewQuestion(question);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository) private questionRepository: QuestionRepository,
  ) {}

  getAllQuestion() {
    return [1, 2, 3, 4, 'From the service'];
  }

  async createNewQuestion(question: CreateQuestionDto): Promise<Question> {
    console.log('Inside create new quiz service');
    return await this.questionRepository.save(question);
  }
}

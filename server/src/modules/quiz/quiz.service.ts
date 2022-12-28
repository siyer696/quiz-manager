import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  getAllQuiz() {
    return [1, 2, 3, 4, 'From the service'];
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    console.log('Inside create new quiz service');
    return await this.quizRepository.save(quiz);
  }
}

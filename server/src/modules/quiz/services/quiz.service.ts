import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  getAllQuiz() {
    return [1, 2, 3, 4, 'From the service'];
  }

  async getQuizById(id): Promise<Quiz> {
    // To also load related questions to that quiz
    return await this.quizRepository.findOne(id, {relations: ['questions']});
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    console.log('Inside create new quiz service');
    return await this.quizRepository.save(quiz);
  }
}

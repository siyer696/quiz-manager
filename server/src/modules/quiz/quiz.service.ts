import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createQuizDto } from './dto/CreateQuiz.dto';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  getAllQuiz() {
    return [1, 2, 3];
  }

  async createNewQuiz(quiz: createQuizDto){
    return await this.quizRepository.save(quiz);
  }
}

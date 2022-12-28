import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository) private questionRepository: QuestionRepository,
  ) {}

  getAllQuestion() {
    return [1, 2, 3, 4, 'From the service'];
  }

  async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    console.log('Inside create new quiz service');
    const newQuestion = await this.questionRepository.save({
      question: question.question
    });
    
    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionRepository } from '../repositories/question.repository';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository) private questionRepository: QuestionRepository,
  ) {}

  getAllQuestion() {
    return [1, 2, 3, 4, 'From the service'];
  }

  async findQuestionById(id: number): Promise<Question>{
    return await this.questionRepository.findOne(id, {relations: ['quiz', 'options']});
  }

  async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    console.log('Inside create new question service');
    const newQuestion = await this.questionRepository.save({
      question: question.question
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion
  }
}

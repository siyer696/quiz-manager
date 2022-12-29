import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  questionId: number

  @IsNotEmpty()
  isCorrect: boolean

}

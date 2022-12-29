import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Option } from './option.entity';
import { Quiz } from './quiz.entity';

//Denotes table name
@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The question unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}

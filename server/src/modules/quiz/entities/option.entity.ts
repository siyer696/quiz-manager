import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('options')
export class Option extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The option unique identifier',
      })
      id: number;
    
      @Column({
        type: 'varchar',
      })
      text: string;
    
      @Column({
        type: 'boolean'
      })
      isCorrect: boolean;

    //   @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    //   quiz: Quiz
}
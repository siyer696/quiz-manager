import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from './audit.base';

@Entity()
export class Books extends Audit {
  @PrimaryGeneratedColumn()
  idbooks: number;

  @Column()
  title: string;

  @Column()
  ISBN: string;
}

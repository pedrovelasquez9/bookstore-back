import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  idbooks: number;

  @Column()
  title: string;

  @Column()
  ISBN: string;

  @Column()
  status: boolean;

  @Column()
  created_by: string;

  @Column({ type: 'datetime' })
  created_at: Date;

  @Column()
  updated_by: string;

  @Column({ type: 'datetime' })
  updated_at: Date;
}

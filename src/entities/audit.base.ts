import { Column } from 'typeorm';

export abstract class Audit {
  @Column({ default: true })
  status: boolean;

  @Column()
  created_by: string;

  @Column({ type: 'timestamp', default: () => 'now()' })
  created_at: Date;

  @Column()
  updated_by: string;

  @Column({ type: 'timestamp', default: () => 'now()' })
  updated_at: Date;
}

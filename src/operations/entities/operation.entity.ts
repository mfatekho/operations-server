import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatusNames } from '../../shared/status';

@Entity()
export class Operation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500, nullable: false, default: StatusNames.RUNNING })
  status: string;
}

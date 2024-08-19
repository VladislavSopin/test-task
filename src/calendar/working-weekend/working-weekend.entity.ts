import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class WorkingWeekend {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: Date

  @Column()
  description?: string
}

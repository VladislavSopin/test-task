import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class WorkingHour {
  @PrimaryColumn()
  year: number

  @PrimaryColumn()
  month: number

  @Column()
  hours: number
}

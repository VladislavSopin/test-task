import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Holiday {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: Date

  @Column()
  description?: string
}

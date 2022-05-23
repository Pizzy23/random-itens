import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Desc {
    @PrimaryGeneratedColumn()
    id!: number

    @Column('varchar',{nullable:false})
    effect: string

    @Column('text',{nullable:false})
    description: string
    
}
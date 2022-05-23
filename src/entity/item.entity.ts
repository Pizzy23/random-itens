import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id!: number

    @Column('varchar',{nullable:false})
    rarity: string

    @Column('int',{nullable:false})
    durability: number
    
    @Column('int',{nullable:false})
    damage: number

    @Column('int',{nullable:false})
    status: number

    @Column('int',{nullable:false})
    effect: number
}
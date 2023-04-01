import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";


interface HumanCategoryCreationAttr {
    name: string;
    start_age: number;
    finish_age: number;
    gender: string
}
@Table({tableName: 'humanCategory'})
export class HumanCategory extends Model<HumanCategory,HumanCategoryCreationAttr>{


    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    start_age: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    finish_age: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    gender: string


    @HasMany(() => Event)
    event: Event[]

}

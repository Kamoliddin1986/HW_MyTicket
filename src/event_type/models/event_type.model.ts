import { Column, DataType, ForeignKey, Model, Table, BelongsTo, HasMany } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";


interface EventTypeCreationAttr {
    name: string;
    parent_event_type_id: number
}
@Table({tableName: 'eventType'})
export class EventType extends Model<EventType,EventTypeCreationAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @ForeignKey(()=> EventType)
    @Column({
        type: DataType.INTEGER,
    })
    parent_event_type_id: number;

    @HasMany(()=> EventType)
    eventType: EventType[]


    @HasMany(()=> Event)
    event: Event[]

}

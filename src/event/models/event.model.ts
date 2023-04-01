import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { EventType } from "../../event_type/models/event_type.model";
import { HumanCategory } from "../../human_category/models/human_category.model";
import { Venue } from "../../venue/models/venue.model";
import { Lang } from "../../lang/models/lang.model";


interface EventCreationAttr {
    name: string;
    photo: string;
    start_date: Date;
    start_time: string;
    finish_date: Date;
    finish_time: string;
    info: string;
    event_type_id: number;
    human_category_id: number;
    venue_id: number;
    lang_id: number;
    release_date: Date;
}


@Table({tableName: 'event'})
export class Event extends Model<Event,EventCreationAttr>{
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


    @Column({
        type: DataType.STRING,
    })
    photo: string;

    @Column({
        type: DataType.DATE,
    })
    start_date: Date;


    @Column({
        type: DataType.STRING,
    })

    @Column({
        type: DataType.STRING,
    })
    start_time: string;

    @Column({
        type: DataType.DATE,
    })
    finish_date: Date;

    @Column({
        type: DataType.STRING,
    })
    finish_time: string;


    @Column({
        type: DataType.STRING,
    })
    info: string;


    
    @ForeignKey(()=> EventType)
    @Column({
        type: DataType.INTEGER,
    })
    event_type_id: number;

    @ForeignKey(()=> HumanCategory)
    @Column({
        type: DataType.INTEGER,
    })
    human_category_id: number;


    @ForeignKey(()=> Venue)
    @Column({
        type: DataType.INTEGER,
    })
    venue_id: number;

    @ForeignKey(()=> Lang)
    @Column({
        type: DataType.INTEGER,
    })
    lang_id: number;

    @Column({
        type: DataType.DATE,
    })
    release_date: Date;

    @BelongsTo(() => Venue)
    venue: Venue[]
    
    @BelongsTo(() => HumanCategory)
    human_category: HumanCategory[]

    @BelongsTo(() => EventType)
    event_type: EventType[]
    
    @BelongsTo(() => Lang)
    lang: Lang[]

}

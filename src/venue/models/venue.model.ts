import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { VenueAndType } from "../../venue_and_type/models/venue_and_type.model";
import { VenuePhoto } from "../../venue_photo/models/venue_photo.model";
import { Seat } from "../../seat/models/seat.model";
import { District } from "../../district/models/district.model";
import { Event } from "../../event/models/event.model";
import { Region } from "../../region/models/region.model";

interface VenueCreationAttr {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    schema: string;
    region_id: number;
    district_id: number;
}


@Table({tableName: 'venue'})
export class Venue extends Model <Venue, VenueCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    address: string;

    @Column({
        type: DataType.STRING
    })
    location: string

    @Column({
        type: DataType.STRING
    })
    site: string

    @Column({
        type: DataType.STRING
    })
    phone: string
 
    @Column({
        type: DataType.STRING,
    })
    schema: string


    @ForeignKey(()=> District)
    @Column({
        type: DataType.INTEGER,
    })
    district_id: number

    @ForeignKey(()=> Region)
    @Column({
        type: DataType.INTEGER,
    })
    region_id: number

    @HasMany(() => VenueAndType)
    types: VenueAndType[]

    @HasMany(() => VenuePhoto)
    photo: VenuePhoto[]

    @HasMany(() => Seat)
    seat: Seat[]

    @HasMany(() => Event)
    event: Event[]


    @BelongsTo(() => District)
    district: District[]
    
    @BelongsTo(() => Region)
    region: Region[]

   

    @HasMany(() => VenueAndType)
    type: VenueAndType[]

}

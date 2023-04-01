import { Column, DataType, ForeignKey, Model, Table, BelongsTo } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueType } from "../../venue_type/models/venue_type.model";

interface VenueAndTypeCreationAttr {
    venue_id: number;
    venue_type_id: number
}
@Table({tableName: 'venueAndType'})
export class VenueAndType extends Model<VenueAndType, VenueAndTypeCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(()=> Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    venue_id: number;

    @ForeignKey(()=> VenueType)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    venue_type_id: number;

    @BelongsTo(() => Venue)
    venues: Venue[]

    @BelongsTo(() => VenueType)
    types: VenueType[]
}

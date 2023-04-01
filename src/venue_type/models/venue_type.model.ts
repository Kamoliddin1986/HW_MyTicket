import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { VenueAndType } from "../../venue_and_type/models/venue_and_type.model";

interface VenuetypeCreationAttr {
    name: string
}

@Table({tableName: 'venueType'})
export class VenueType extends Model<VenueType, VenuetypeCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string

    @HasMany(()=> VenueAndType)
    venue: VenueAndType[]

}

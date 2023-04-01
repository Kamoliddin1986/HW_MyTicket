import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";

interface VenuePhotoCretionAttr {
    venue_id: number;
    url: string
}
@Table({tableName: 'venuePhoto'})
export class VenuePhoto extends Model<VenuePhoto,VenuePhotoCretionAttr> {
 
    
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    url: string;


}

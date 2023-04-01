import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { SeatType } from "../../seat_type/models/seat_type.model";

interface SeatCreationAttr {
    sector: number;
    row_number: number;
    number: number;
    venue_id: number;
    seat_type_id: number;
    location_in_schema: string;
}

@Table({tableName: 'seat'})
export class Seat extends Model<Seat, SeatCreationAttr> {
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
    sector: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    row_number: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    number: number;

    @ForeignKey(()=> Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    venue_id: number;


    @ForeignKey(()=> SeatType)
    @Column({
        type: DataType.INTEGER,
    })
    seat_type_id: number;

    @Column({
        type: DataType.STRING,
    })
    location_in_schema: string;

    @BelongsTo(()=> Venue)
    venue: Venue[]
    @BelongsTo(()=> SeatType)
    seatType: SeatType[]


}

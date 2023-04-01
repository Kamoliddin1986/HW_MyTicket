import { Column, DataType, Model, Table,HasMany } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";

interface SeattypeCreationAttr {
    name: string
}


@Table({tableName: 'seatType'})
export class SeatType extends Model<SeatType,SeattypeCreationAttr> {
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

    @HasMany(() => Seat)
    seats: Seat[]
}

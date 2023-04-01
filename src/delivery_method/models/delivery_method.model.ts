import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";


interface DeliveryMethodCreationAttr {
    name: string
}


@Table({tableName: ''})
export class DeliveryMethod extends Model<DeliveryMethod,DeliveryMethodCreationAttr>{


    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
        id: number;

        @Column({
            type: DataType.STRING
        })
        name: string;

        @HasMany(() => Booking)
        booking: Booking[]
}

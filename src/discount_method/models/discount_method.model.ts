import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";

interface DiscountMethodCreationAttr {
    name: string
}

@Table({tableName: 'discountMethod'})
export class DiscountMethod extends Model<DiscountMethod, DiscountMethodCreationAttr> {
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

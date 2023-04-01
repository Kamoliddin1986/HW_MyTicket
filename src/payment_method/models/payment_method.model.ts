
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Booking } from "../../booking/models/booking.model";
interface PaymentMethodAttr {
    name: string;
}

@Table({tableName: 'paymentMethod'})
export class PaymentMethod extends Model<PaymentMethod, PaymentMethodAttr>{
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
        bookin: Booking[]
}

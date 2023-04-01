import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { PaymentMethod } from "../../payment_method/models/payment_method.model";
import { DeliveryMethod } from "../../delivery_method/models/delivery_method.model";
import { DiscountMethod } from "../../discount_method/models/discount_method.model";
import { Status } from "../../status/models/status.model";
import { NOW } from "sequelize";



interface BookingCreationAttr {
    cart_id: number;
    finished: Date;
    payment_method_id: number;
    delivery_method_id: number;
    discount_coupon_id: number;
    status_id: number;
} 

@Table({tableName: 'booking'})

export class Booking extends Model<Booking, BookingCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
        id: number;

        @ForeignKey(() => Cart)
        @Column({
            type: DataType.INTEGER
        })
        cart_id: number;



        @Column({
            type: DataType.DATE,
        })
        finished: Date;

        @ForeignKey(() => PaymentMethod)
        @Column({
            type: DataType.INTEGER
        })
        payment_method_id: number;

        @ForeignKey(() => DeliveryMethod)
        @Column({
            type: DataType.INTEGER
        })
         delivery_method_id: number;

         @ForeignKey(() => DiscountMethod)
         @Column({
             type: DataType.INTEGER
         })
         discount_coupon_id: number;

         @ForeignKey(() => Status)
         @Column({
             type: DataType.INTEGER,
             defaultValue: 2
         })
        status_id: number;



}

import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";
import { Status } from '../../status/models/status.model';
import { Customer } from "../../customer/models/customer.model";
import { Booking } from "../../booking/models/booking.model";

interface CartCreationAttr {
    ticket_id: number;
    customer_id: number;
    createdAt: Date;
    fineshedAt: Date;
    status_id: number;

}


@Table({tableName: 'cart'})
export class Cart extends Model<Cart, CartCreationAttr>{

        @Column({
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        })
    id: number;

    @ForeignKey(()=> Ticket)
    @Column({
        type: DataType.INTEGER,
    })
    ticket_id: number;

    @ForeignKey(()=> Customer)
    @Column({
        type: DataType.INTEGER,
    })
    customer_id: number;

    @Column({
        type: DataType.DATE,
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
    })
    fineshedAt: Date;


    @ForeignKey(()=> Status)
    @Column({
        type: DataType.INTEGER,
    })
    status_id: number;

    @BelongsTo(() => Status)
    status: Status[]
    
    @BelongsTo(() => Ticket)
    ticket: Ticket[]
    
    @BelongsTo(() => Customer)
    customer: Customer[]

    @HasMany(() => Booking)
    booking: Booking[]
}

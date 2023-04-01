import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { Seat } from "../../seat/models/seat.model";
import { TicketType } from "../../ticket_type/models/ticket_type.model";
import { Status } from "../../status/models/status.model";
import { Cart } from "../../cart/models/cart.model";


interface TicketCreationAttr {
    event_id: number;
    seat_id: number;
    price: number;
    service_fee: number;
    status_id: number;
    ticket_type_id: number;

}
@Table({tableName: 'ticket'})
export class Ticket extends Model<Ticket,TicketCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @ForeignKey(()=> Event)
    @Column({
        type: DataType.INTEGER,
    })
    event_id: number;

    @ForeignKey(()=> Seat)
    @Column({
        type: DataType.INTEGER,
    })
    seat_id: number;

    @Column({
        type: DataType.INTEGER,
    })
    price: number;

    @Column({
        type: DataType.INTEGER,
    })
    service_fee: number;

    @ForeignKey(()=> Status)
    @Column({
        type: DataType.INTEGER,
    })
    status_id: number;


    @ForeignKey(()=> TicketType)
    @Column({
        type: DataType.INTEGER,
    })
    ticket_type_id: number;

    @BelongsTo(()=> Event)
    event: Event[]

    @BelongsTo(()=> Seat)
    seat: Seat[]
    
    @BelongsTo(()=> TicketType)
    ticket_type: TicketType[]

    @BelongsTo(()=> Status)
    status: Status[]

    @HasMany(()=> Cart)
    cart: Cart[]
}

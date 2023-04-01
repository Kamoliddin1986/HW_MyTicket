import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";


interface TicketTypeCreationAttr {
    name: string
}


@Table({tableName: 'TicketType'})
export class TicketType extends Model<TicketType,TicketTypeCreationAttr>{

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


    @HasMany(() => Ticket)
    ticket: Ticket[]
}


import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";
import { Cart } from "../../cart/models/cart.model";

interface StatusCreationAttr {
    name: string
}
@Table({tableName: 'status'})
export class Status extends Model<Status, StatusCreationAttr> {


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
    tickets: Ticket[]

    @HasMany(()=> Cart)
    cart: Cart[]
}


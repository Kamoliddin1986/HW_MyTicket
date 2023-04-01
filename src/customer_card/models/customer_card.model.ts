import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";

interface CustomerCardCreationAttr {
    customer_id: number;
    name: string;
    phone: string;
    number: string;
    year: string;
    month: string;
    is_active: boolean;
    is_main: boolean;
}
@Table({tableName: 'customerCard'})
export class CustomerCard extends Model<CustomerCard,CustomerCardCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
        id: number;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER
    })
    customer_id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @Column({
        type: DataType.STRING
    })
    phone: string;

    @Column({
        type: DataType.STRING
    })
    number: string;

    @Column({
        type: DataType.STRING
    })
    year: string;

    @Column({
        type: DataType.STRING
    })
    month: string;

    @Column({
        type: DataType.BOOLEAN
    })
    is_active: boolean;

    @Column({
        type: DataType.BOOLEAN
    })
    is_main: boolean;

    @BelongsTo(() => Customer)
    customer: Customer[]

}

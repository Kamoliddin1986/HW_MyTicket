import { Column, DataType, ForeignKey, HasMany, Model, Table, BelongsTo } from "sequelize-typescript";
import { Lang } from "../../lang/models/lang.model";
import { Cart } from "../../cart/models/cart.model";
import { CustomerCard } from "../../customer_card/models/customer_card.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";

interface CustomerCreationAttr {

    first_name: string;
    last_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    birth_date: Date;
    gender: string;
    lang_id: number;
    hashed_refresh_token: string;
}

@Table({tableName: 'customer'})
export class Customer extends Model<Customer, CustomerCreationAttr> {
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
    first_name: string;


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    @Column({
        type: DataType.STRING,
    })
    email: string;

    @Column({
        type: DataType.DATE,
    })
    birth_date: Date;

    @Column({
        type: DataType.STRING,
    })
    gender: string;

    @ForeignKey(() => Lang)
    @Column({
        type: DataType.INTEGER,
    })
    lang_id: number;

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;

    @BelongsTo(() => Lang)
    lang: Lang[]


    @HasMany(() => Cart)
    cart: Cart[]
    
    @HasMany(() => CustomerCard)
    customerCard: CustomerCard[]
    
    @HasMany(() => CustomerAddress)
    customerAddress: CustomerAddress[]
}

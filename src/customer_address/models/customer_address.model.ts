import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";

interface CustomerAddressCreationAttr {
    customer_id: number;
    name: string;
    country_id: number;
    region_id: number;
    district_id: number;
    street: string;
    house: string;
    flat: number;
    location: string;
    post_index: string;
    info: number;

}
@Table({tableName: 'customerAddress'})
export class CustomerAddress extends Model<CustomerAddress, CustomerAddressCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
    })
    customer_id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
    })
    country_id: number;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
    })
    region_id: number;

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
    })
    district_id: number;

    @Column({
        type: DataType.STRING,
    })
    street: string;

    @Column({
        type: DataType.STRING,
    })
    house: string;

    @Column({
        type: DataType.INTEGER,
    })
    flat: number;

    @Column({
        type: DataType.STRING,
    })
    location: string;

    @Column({
        type: DataType.STRING,
    })
    post_index: string;

    @Column({
        type: DataType.STRING,
    })
    info: string;

    @BelongsTo(() => Region)
    region: Region[]

    @BelongsTo(() => District)
    district: District[]

    @BelongsTo(() => Customer)
    customer: Customer[]

    

}

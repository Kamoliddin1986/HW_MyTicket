import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";

interface CountryCreationAttr {
    name: string;
}


@Table({tableName: 'country'})
export class Country extends Model<Country, CountryCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
        id: number;

        @Column({
            type: DataType.STRING,
        })
        name: string;

        @HasMany(() => Region)
        region: Region[]

        @HasMany(() => CustomerAddress)
        customer_address: CustomerAddress[]
}

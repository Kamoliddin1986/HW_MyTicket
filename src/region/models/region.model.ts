import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Venue } from "../../venue/models/venue.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Country } from "../../country/models/country.model";
import { Col } from "sequelize/types/utils";

interface RegionCretionAttr {
    name: string;
    country_id: number;
}


@Table({tableName: 'region'})
export class Region extends Model<Region, RegionCretionAttr>{
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

    @ForeignKey(() => Country)
    @Column({
        type: DataType.INTEGER
    })
    country_id: number;

    @BelongsTo(() => Country)
    country: Country[]

    @HasMany(()=> District)
    district: District[]

    @HasMany(()=> Venue)
    venue: Venue[]

    @HasMany(()=> CustomerAddress)
    customerAddress: CustomerAddress[]
}

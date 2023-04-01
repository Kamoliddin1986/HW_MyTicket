import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
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
}

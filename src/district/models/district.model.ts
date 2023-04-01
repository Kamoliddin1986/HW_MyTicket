import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
interface DistrictCreationAttr {
    region_id: number;
    name: string
}

@Table({tableName: 'district'})
export class District extends Model<District, DistrictCreationAttr> {


    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    region_id: number

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    name: string;

    @BelongsTo(() => Region)
    region: Region[]
}

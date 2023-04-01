import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";



interface AdminCreationAttr {
    name: string;
    login: string;
    hashed_password: string;
    is_active: boolean;
    is_creator: boolean;
    hashed_refresh_token: string;
}


@Table({tableName: ''})

export class Admin extends Model<Admin, AdminCreationAttr>{

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

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    login: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    hashed_password: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    is_active: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    is_creator: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    hashed_refresh_token: string;
}

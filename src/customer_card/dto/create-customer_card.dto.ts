import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber, IsBoolean} from "class-validator";


export class CreateCustomerCardDto {


    @ApiProperty({ example: '2', description: 'mijoz id raqami'})
    @IsNotEmpty()
    @IsNumber()
    customer_id: number;

    @ApiProperty({ example: '2', description: 'karta nomi'})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: '2', description: 'mijoz tel raqami'})
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty({ example: '2', description: 'karta raqami'})
    @IsNotEmpty()
    @IsString()
    number: string;

    @ApiProperty({ example: '2', description: 'yili'})
    @IsNotEmpty()
    @IsString()
    year: string;

    @ApiProperty({ example: '2', description: 'oyi'})
    @IsNotEmpty()
    @IsString()
    month: string;

    @ApiProperty({ example: 'true', description: 'activ kartami'})
    @IsBoolean()
    is_active?: boolean;

    @ApiProperty({ example: 'true', description: 'asosiy kartami'})
    @IsBoolean()
    is_main?: boolean;
}

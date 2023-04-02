
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateCustomerAddressDto {
    @ApiProperty({ example: '2', description: 'mijoz id raqami'})
    @IsNotEmpty()
    @IsNumber()
    customer_id: number;

    @ApiProperty({ example: 'ofis, uy', description: 'adress nomi'})
    @IsString()
    name?: string;

    @ApiProperty({ example: '2', description: 'davlat id raqami'})
    @IsNotEmpty()
    @IsNumber()
    country_id: number;

    @ApiProperty({ example: '2', description: 'tuman id raqami'})
    @IsNotEmpty()
    @IsNumber()
    region_id: number;

    @ApiProperty({ example: '2', description: 'massive id raqami'})
    @IsNotEmpty()
    @IsNumber()
    district_id: number;

    @ApiProperty({ example: 'nimadur', description: 'kucha nomi'})
    @IsString()
    street?: string;

    @ApiProperty({ example: '5b ', description: 'uy raqami'})
    @IsString()
    house?: string;

    @ApiProperty({ example: '5b ', description: 'xonadon raqami'})
    @IsNumber()
    flat?: number;

    @ApiProperty({ example: 'lat: 15.25.36, lon: 36.25.14 ', description: 'koordinatasi'})
    @IsString()
    location?: string;

    @ApiProperty({ example: '1000000 ', description: 'index'})
    @IsString()
    post_index?: string;

    @ApiProperty({ example: 'nimadur malumot ', description: 'quwimcha malumot'})
    @IsString()
    info?: string;
}

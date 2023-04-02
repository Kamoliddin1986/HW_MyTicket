import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateDistrictDto {
    @ApiProperty({ example: '2', description: 'kocha id raqami'})
    @IsNotEmpty()
    @IsNumber()
    region_id: number;
    @ApiProperty({ example: 'a.Temur ', description: 'kucha nomi'})
    @IsNotEmpty()
    @IsString()
    name: string
}

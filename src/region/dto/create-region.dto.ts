import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateRegionDto {
    @ApiProperty({ example: 'Mirobod', description: 'Tuman nomi'})
    @IsNotEmpty()
    @IsString()
    name: string;
    @ApiProperty({ example: '2', description: 'Davlat id raqami'})
    @IsNotEmpty()
    @IsNumber()
    country_id: number;
}

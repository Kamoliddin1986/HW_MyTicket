import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateCountryDto {

    @ApiProperty({ example: 'Uzbekistan', description: 'davlat'})
    @IsNotEmpty()
    @IsString()
    name: string;
}

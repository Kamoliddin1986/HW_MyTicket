import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateSeatTypeDto {
    @ApiProperty({ example: 'poter, balcon', description: 'joyi turi nomi'})
    @IsNotEmpty()
    @IsString()
    name: string
}

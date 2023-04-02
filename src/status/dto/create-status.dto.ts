import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";

export class CreateStatusDto {
    @ApiProperty({ example: 'booked', description: 'status nomi'})
    @IsNotEmpty()
    @IsString()
    name: string
}

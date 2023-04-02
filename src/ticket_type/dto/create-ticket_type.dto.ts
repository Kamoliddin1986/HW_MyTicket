import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateTicketTypeDto {
    @ApiProperty({ example: 'electron chipta', description: 'chipta turi'})
    @IsNotEmpty()
    @IsString()
    name: string
}

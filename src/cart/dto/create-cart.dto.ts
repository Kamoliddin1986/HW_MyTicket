import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateCartDto {

    @ApiProperty({ example: '2', description: 'chipta id raqami'})
    @IsNotEmpty()
    @IsNumber()
    ticket_id: number;

    @ApiProperty({ example: '2', description: 'mijoz id raqami'})
    @IsNotEmpty()
    @IsNumber()
    customer_id: number;
}

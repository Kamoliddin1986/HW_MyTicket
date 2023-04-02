import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateTicketDto {

    @ApiProperty({ example: '2', description: 'marosim id raqami'})
    @IsNotEmpty()
    @IsNumber()
    event_id: number;

    @ApiProperty({ example: '2', description: 'marosim joyi id raqami'})
    @IsNotEmpty()
    @IsNumber()
    seat_id: number;

    @ApiProperty({ example: '60000', description: 'chipta narxi'})
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({ example: '600', description: 'hizmat xaqqi'})
    @IsNotEmpty()
    @IsNumber()
    service_fee: number;

    @ApiProperty({ example: '3', description: 'chipta statusi IDsi'})
    @IsNotEmpty()
    @IsNumber()
    status_id: number;

    @ApiProperty({ example: '3', description: 'chipta turi IDsi'})
    @IsNotEmpty()
    @IsNumber()
    ticket_type_id: number;
}

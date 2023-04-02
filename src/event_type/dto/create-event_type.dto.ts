import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateEventTypeDto {
    @ApiProperty({ example: 'Futbol', description: 'marosim turi'})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: '3', description: 'ota marosim turi'})
    @IsNotEmpty()
    @IsNumber()
    parent_event_type_id: number
}

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";

export class CreateVenueAndTypeDto {
    @ApiProperty({ example: '2', description: 'marosim joyi id raqami'})
    @IsNotEmpty()
    @IsNumber()
    venue_id: number;
    @ApiProperty({ example: '2', description: 'marosim turi id raqami'})
    @IsNotEmpty()
    @IsNumber()
    venue_type_id: number
}

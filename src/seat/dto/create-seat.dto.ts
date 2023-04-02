import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";

export class CreateSeatDto {
    @ApiProperty({ example: '2', description: 'sector raqami'})
    @IsNotEmpty()
    @IsNumber()
    sector: number;

    @ApiProperty({ example: '2', description: 'qator raqami'})
    @IsNotEmpty()
    @IsNumber()
    row_number: number;

    @ApiProperty({ example: '2', description: 'urindiq raqami'})
    @IsNotEmpty()
    @IsNumber()
    number: number;

    @ApiProperty({ example: '2', description: 'marosim id raqami'})
    @IsNotEmpty()
    @IsNumber()
    venue_id: number;

    @ApiProperty({ example: '2', description: 'marosim joyi turi id raqami'})
    @IsNotEmpty()
    @IsNumber()
    seat_type_id: number;

    @ApiProperty({ example: 'balkon, asosiy joylar', description: 'joylar maydoni ruyxati'})
    @IsString()
    location_in_schema?: string;
}

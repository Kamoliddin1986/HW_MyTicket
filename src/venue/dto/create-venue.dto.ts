
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateVenueDto {
    @ApiProperty({ example: 'bunyodkor', description: 'marosim joyinin nomi'})
    @IsNotEmpty()
    @IsString()

    name: string;
    @ApiProperty({ example: 'bunyodkor kuchasi', description: 'marosim joyinin manzili'})
    @IsNotEmpty()
    @IsString()

    address: string;
    @ApiProperty({ example: 'lon: 15.25.36, lat: 25.36.25', description: 'marosim joyinin koordinati'})
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiProperty({ example: 'www.bunyodkor.uz', description: 'marosim joyinin sayti'})
    @IsString()
    site?: string;

    @ApiProperty({ example: '+998931722222', description: 'marosim joyinin telefon raqami'})
    @IsString()
    phone?: string;

    @ApiProperty({ example: 'joylawiwi', description: 'marosim joyinin joylawiwi'})
    @IsString()
    schema?: string;

    @ApiProperty({ example: '2', description: 'marosim joyinin region IDsi'})
    @IsNotEmpty()
    @IsNumber()
    region_id: number;

    @ApiProperty({ example: '2', description: 'marosim joyinin kuch IDsi'})
    @IsNotEmpty()
    @IsNumber()
    district_id: number;
}

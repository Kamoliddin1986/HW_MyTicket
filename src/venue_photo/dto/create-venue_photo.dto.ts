import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateVenuePhotoDto {
    @ApiProperty({ example: '2', description: 'marosim joyi id raqami'})
    @IsNotEmpty()
    @IsNumber()
    venue_id: number;
    @ApiProperty({ example: 'htttp:/....,', description: 'marosim joyi rasmi'})
    @IsNotEmpty()
    @IsString()
    url: string
}

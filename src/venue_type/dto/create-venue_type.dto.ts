import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength} from "class-validator";

export class CreateVenueTypeDto {
    @ApiProperty({ example: 'Teatr, kino, Sport', description: 'marosim joyi'})
    @IsNotEmpty()
    @IsString()
    name: string
}

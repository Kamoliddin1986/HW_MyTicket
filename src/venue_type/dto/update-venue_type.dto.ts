import { PartialType } from '@nestjs/mapped-types';
import { CreateVenueTypeDto } from './create-venue_type.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength} from "class-validator";

export class UpdateVenueTypeDto{
    @ApiProperty({ example: 'Teatr, kino, Sport', description: 'marosim joyi'})
    @IsNotEmpty()
    @IsString()
    name: string
}

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";

export class CreateLangDto {
    @ApiProperty({ example: 'Uzbek', description: 'til'})
    @IsNotEmpty()
    @IsString()
    name: string;
}

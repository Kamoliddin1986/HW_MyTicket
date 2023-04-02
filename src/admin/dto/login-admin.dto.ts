import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class LoginAdminDto {

    @ApiProperty({ example: 'Admin', description: 'admin login'})
    @IsNotEmpty()
    @IsString()
    login: string;

    @ApiProperty({ example: 'Pass', description: 'admin parol'})
    @IsNotEmpty()
    @IsString()
    password: string;
}
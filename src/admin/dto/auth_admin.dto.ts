import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";

export class AuthAdminDto {
    @ApiProperty({ example: 'Admin', description: 'admin ismi'})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'Admin', description: 'admin logini'})
    @IsNotEmpty()
    @IsString()
    login: string;

    @ApiProperty({ example: 'Pass', description: 'admin paroli'})
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ example: 'Pass', description: 'admin tasdiqlash paroli'})
    @IsNotEmpty()
    @IsString()
    confirm_password: string;
}

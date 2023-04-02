
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";

export class AuthCustomerDto {

    @ApiProperty({ example: 'Kimdur', description: 'ismi'})
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty({ example: 'Kimdurov', description: 'familiya'})
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @ApiProperty({ example: '+998933333', description: 'tel nomer'})
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty({ example: 'Passs', description: 'parol'})
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ example: 'Pass', description: 'parol'})
    @IsNotEmpty()
    @IsString()
    confirm_password: string;

    @ApiProperty({ example: 'mail@Mail.ru', description: 'email'})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    
    @ApiProperty({ example: '2022-01-01', description: 'tugilgan kun'})
    @IsNotEmpty()
    @IsDate()
    birth_date: Date;

    
    @ApiProperty({ example: 'erkak', description: 'jinsi'})
    @IsNotEmpty()
    @IsString()
    gender: string;
}
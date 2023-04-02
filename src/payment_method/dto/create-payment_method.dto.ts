import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";



export class CreatePaymentMethodDto {
    @ApiProperty({ example: 'payMe', description: 'tulov turi'})
    @IsNotEmpty()
    @IsString()
    name:string
}

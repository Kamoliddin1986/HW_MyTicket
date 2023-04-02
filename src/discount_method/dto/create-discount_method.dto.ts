import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";



export class CreateDiscountMethodDto {
    @ApiProperty({ example: '30%', description: 'skidka turi'})
    @IsNotEmpty()
    @IsString()
    name: string
}

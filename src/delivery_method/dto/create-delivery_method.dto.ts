import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateDeliveryMethodDto {
    @ApiProperty({ example: 'post', description: 'etkazib beriw turi'})
    @IsNotEmpty()
    @IsString()
    name: string
}

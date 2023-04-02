import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateBookingDto {

    @ApiProperty({ example: '2', description: 'aravacha id raqami'})
    @IsNotEmpty()
    @IsNumber()
    cart_id: number;

    @ApiProperty({ example: '2022-01-01', description: 'tulangan sana'})
    @IsDate()
    finished?: Date;

    
    @ApiProperty({ example: '2', description: 'tulov turi id raqami'})
    @IsNotEmpty()
    @IsNumber()
    payment_method_id: number;


    @ApiProperty({ example: '2', description: 'etkazib berish turi id raqami'})
    @IsNotEmpty()
    @IsNumber()
    delivery_method_id: number;

    
    @ApiProperty({ example: '2', description: 'scidka turi id raqami'})
    @IsNumber()
    discount_coupon_id?: number;

    
    @ApiProperty({ example: '2', description: 'status id raqami'})
    @IsNumber()
    status_id?: number; 
}

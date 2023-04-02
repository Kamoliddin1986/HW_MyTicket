import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber} from "class-validator";


export class CreateHumanCategoryDto {
    @ApiProperty({ example: 'teenager', description: 'yosh kategoriyasi'})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: '13', description: 'kategoriyani bowlaniw yoshi'})
    @IsNotEmpty()
    @IsNumber()
    start_age: number;

    @ApiProperty({ example: '19', description: 'kategoriyani tugash yoshi'})
    @IsNotEmpty()
    @IsNumber()
    finish_age: number;

    @ApiProperty({ example: 'male', description: 'yosh kategoriyasi jinsi'})
    @IsNotEmpty()
    @IsString()
    gender: string
}


import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber, IsTimeZone} from "class-validator";

export class CreateEventDto {
    @ApiProperty({ example: 'bunyodkor-paxatkor', description: 'marosim nomi'})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'http://...', description: 'marosim rasmi'})
    @IsString()
    photo?: string;

    @ApiProperty({ example: '2022-01-01', description: 'marosim bowlanish kuni'})
    @IsNotEmpty()
    @IsDate()
    start_date: Date;

    
    @ApiProperty({ example: '16:30:00', description: 'marosim bowlanish vaqti'})
    @IsNotEmpty()
    @IsString()
    start_time: string;

    @ApiProperty({ example: '2022-01-01', description: 'marosim tugash kuni'})
    @IsNotEmpty()
    @IsDate()
    finish_date: Date;

    @ApiProperty({ example: '16:30:00', description: 'marosim tugatish vaqti'})
    @IsNotEmpty()
    @IsString()
    finish_time: string;

    @ApiProperty({ example: 'xamma tartibni saqlawi shart', description: 'marosim xaqida quwimcha malumot'})
    @IsString()
    info?: string;

    @ApiProperty({ example: '4', description: 'marosim turi IDsi'})
    @IsNotEmpty()
    @IsNumber()
    event_type_id: number;

    @ApiProperty({ example: '1', description: 'yosh kategoriyasi IDsi'})
    @IsNotEmpty()
    @IsNumber()
    human_category_id: number;

    @ApiProperty({ example: '4', description: 'marosim joyi IDsi'})
    @IsNotEmpty()
    @IsNumber()
    venue_id: number;

    @ApiProperty({ example: '4', description: 'til IDsi'})
    @IsNotEmpty()
    @IsNumber()
    lang_id: number;

    @ApiProperty({ example: '2022-01-01', description: 'marosim elon qilingan sana'})
    @IsNotEmpty()
    @IsDate()
    release_date: Date;
}

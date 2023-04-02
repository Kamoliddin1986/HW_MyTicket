import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber, MinLength, IsNumber, IsBoolean} from "class-validator";

export class ActiveCreatorAdminDto{

    @ApiProperty({ example: 'true', description: 'admin aktivmi?'})
    @IsBoolean()
    is_active?: boolean;

    @ApiProperty({ example: 'true', description: 'admin kirituvchimi?'})
    @IsBoolean()
    is_creator?: boolean;
}

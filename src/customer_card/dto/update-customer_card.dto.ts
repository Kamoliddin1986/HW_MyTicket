import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerCardDto } from './create-customer_card.dto';

export class UpdateCustomerCardDto{
    name?: string;
    phone?: string;
    number?: string;
    year?: string;
    month?: string;
    is_active?: boolean;
    is_main?: boolean;

}

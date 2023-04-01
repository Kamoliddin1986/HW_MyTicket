import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerAddressDto } from './create-customer_address.dto';

export class UpdateCustomerAddressDto{
    name?: string;
    country_id?: number;
    region_id?: number;
    district_id?: number;
    street?: string;
    house?: string;
    flat?: number;
    location?: string;
    post_index?: string;
    info?: string;
}

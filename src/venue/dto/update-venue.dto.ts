import { PartialType } from '@nestjs/mapped-types';
import { CreateVenueDto } from './create-venue.dto';

export class UpdateVenueDto{
    name?: string;
    address?: string;
    location?: string;
    site?: string;
    phone?: string;
    schema?: string;
    region_id?: number;
    district_id?: number;
}

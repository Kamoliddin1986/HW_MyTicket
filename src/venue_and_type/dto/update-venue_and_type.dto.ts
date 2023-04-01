import { PartialType } from '@nestjs/mapped-types';
import { CreateVenueAndTypeDto } from './create-venue_and_type.dto';

export class UpdateVenueAndTypeDto extends PartialType(CreateVenueAndTypeDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscountMethodDto } from './create-discount_method.dto';

export class UpdateDiscountMethodDto extends PartialType(CreateDiscountMethodDto) {}

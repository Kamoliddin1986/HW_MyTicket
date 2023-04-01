


import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {SequelizeModule} from '@nestjs/sequelize'
import { VenueModule } from './venue/venue.module';
import { VenueAndTypeModule } from './venue_and_type/venue_and_type.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { Venue } from './venue/models/venue.model';
import { VenueAndType } from './venue_and_type/models/venue_and_type.model';
import { VenueType } from './venue_type/models/venue_type.model';
import { Region } from './region/models/region.model';
import { District } from './district/models/district.model';
import { Seat } from './seat/models/seat.model';
import { SeatType } from './seat_type/models/seat_type.model';
import { VenuePhoto } from './venue_photo/models/venue_photo.model';
import { HumanCategoryModule } from './human_category/human_category.module';
import { EventTypeModule } from './event_type/event_type.module';
import { EventModule } from './event/event.module';
import { HumanCategory } from './human_category/models/human_category.model';
import { EventType } from './event_type/models/event_type.model';
import { Event } from './event/models/event.model';
import { LangModule } from './lang/lang.module';
import { Lang } from './lang/models/lang.model';
import { TicketModule } from './ticket/ticket.module';
import { Ticket } from './ticket/models/ticket.model';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { TicketType } from './ticket_type/models/ticket_type.model';
import { StatusModule } from './status/status.module';
import { Status } from './status/models/status.model';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/models/cart.model';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/models/customer.model';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerAddress } from './customer_address/models/customer_address.model';
import { CountryModule } from './country/country.module';
import { Country } from './country/models/country.model';
import { BookingModule } from './booking/booking.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerCard } from './customer_card/models/customer_card.model';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DiscountMethodModule } from './discount_method/discount_method.module';
import { PaymentMethod } from './payment_method/models/payment_method.model';
import { DiscountMethod } from './discount_method/models/discount_method.model';
import { DeliveryMethod } from './delivery_method/models/delivery_method.model';
import { Booking } from './booking/models/booking.model';
import { AdminModule } from './admin/admin.module';




@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true}),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [Venue,VenueAndType,VenueType,
                Region,District,Lang,Seat, SeatType, 
                VenuePhoto, Event, HumanCategory,
                EventType,Ticket, TicketType,Status,Cart,
                Customer,CustomerAddress,Country,
                CustomerCard,PaymentMethod, DiscountMethod, DeliveryMethod, Booking ],
            autoLoadModels: true,
            logging: true
        }),
        VenueModule,
        VenueAndTypeModule,
        VenueTypeModule,
        VenuePhotoModule,
        SeatModule,
        SeatTypeModule,
        RegionModule,
        DistrictModule,
        HumanCategoryModule,
        EventTypeModule,
        EventModule,
        LangModule,
        TicketModule,
        TicketTypeModule,
        StatusModule,
        CartModule,
        CustomerModule,
        CustomerAddressModule,
        CountryModule,
        BookingModule,
        CustomerCardModule,
        PaymentMethodModule,
        DeliveryMethodModule,
        DiscountMethodModule,
        AdminModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule {}

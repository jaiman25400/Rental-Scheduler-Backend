import { Module } from '@nestjs/common';
import { RentalsController } from './rentals.controller';
import { RentalsService } from './rentals.service';

@Module({
  controllers: [RentalsController],
  providers: [RentalsService]
})
export class RentalsModule {}

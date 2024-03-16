import { Body, Controller, Get, Post } from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { Rentals } from './rentals.interface';

@Controller()
export class RentalsController {
  constructor(private rentalServices: RentalsService) {}

  @Get()
  public getRentals() {
    return this.rentalServices.getProperties();
  }

  @Post()
  public postRentals(@Body() rental: Rentals) {
    return this.rentalServices.postProperties(rental);
  }
}

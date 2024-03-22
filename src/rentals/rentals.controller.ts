import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { Rentals } from './rentals.interface';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class RentalsController {
  constructor(private rentalServices: RentalsService) {}

  @Get()
  public getRentals() {
    console.log('GET API');
    return this.rentalServices.getProperties();
  }

  @Post()
  @UseInterceptors(FileInterceptor('images'))
  public postRentals(
    @Body() rental: any,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log('API Hit::: ', rental, 'File :', files);
    return this.rentalServices.postProperties(rental);
  }
}

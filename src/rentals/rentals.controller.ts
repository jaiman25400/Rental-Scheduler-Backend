import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { Rentals } from './rentals.interface';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

@Controller()
export class RentalsController {
  constructor(private rentalServices: RentalsService) {}

  @Get('teams')
  async getTeams() {
    try {
      const teams = this.rentalServices.generateTeams();
      return teams;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch Teams',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async getRentals() {
    try {
      const rentals = this.rentalServices.getProperties();
      return rentals;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch rentals',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (_, files, cb) => {
          cb(null, `${files.originalname}`);
        },
      }),
    }),
  )
  async postRentals(
    @Body() rental: Rentals,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    try {
      const fileLinks: string[] = [];

      // Process each file
      files.forEach((file) => {
        const fileLink = `http://localhost:3000/${file.originalname}`;
        fileLinks.push(fileLink); // Push the file link to the array
      });

      // Include the file links in the rental object
      if (!rental.images) {
        rental.images = []; // Initialize the array if it's not already initialized
      }
      rental.images.push(...fileLinks); // Push the file links to the images array

      // Generate UUID for rental ID
      rental.id = uuidv4();

      this.rentalServices.postProperties(rental);

      return { message: 'Rental created successfully', rental };
    } catch (error) {
      throw new HttpException(
        'Failed to create rental',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

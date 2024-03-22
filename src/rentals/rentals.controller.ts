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
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { rentals } from './rentals.mock';

@Controller()
export class RentalsController {
  constructor(private rentalServices: RentalsService) {}

  @Get()
  public getRentals() {
    console.log('GET API :');
    return this.rentalServices.getProperties();
  }

  // @Post()
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (req, files, cb) => {
  //         cb(null, `${files.originalname}`);
  //       },
  //     }),
  //   }),
  // )
  // public postRentals(
  //   @Body() rental: Rentals,
  //   @UploadedFile() file: Express.Multer.File,
  // ) {
  //   console.log('API Hit::: ', rental);

  //   const fileLink = `http://localhost:3000/${file.originalname}`;
  //   console.log('File Link: ', fileLink);
  //   // Include the file link in the rental object
  //   if (!rental.images) {
  //     rental.images = []; // Initialize the array if it's not already initialized
  //   }
  //   rental.images.push(fileLink); // Push the file link to the images array

  //   const mockDataLength = rentals.length;
  //   rental.id = (mockDataLength + 1).toString();

  //   // Add the current date
  //   rental.cleaningDate = new Date();
  //   console.log('Rental :', rental);
  //   return this.rentalServices.postProperties(rental);
  // }

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, files, cb) => {
          cb(null, `${files.originalname}`);
        },
      }),
    }),
  )
  public postRentals(
    @Body() rental: Rentals,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log('API Hit::: ', rental);

    const fileLinks: string[] = []; // Array to store file links

    // Process each file
    files.forEach((file) => {
      const fileLink = `http://localhost:3000/${file.originalname}`;
      console.log('File Link: ', fileLink);
      fileLinks.push(fileLink); // Push the file link to the array
    });

    // Include the file links in the rental object
    if (!rental.images) {
      rental.images = []; // Initialize the array if it's not already initialized
    }
    rental.images.push(...fileLinks); // Push the file links to the images array

    const mockDataLength = rentals.length;
    rental.id = (mockDataLength + 1).toString();

    // Add the current date
    rental.cleaningDate = new Date();
    console.log('Rental :', rental);
    return this.rentalServices.postProperties(rental);
  }
}

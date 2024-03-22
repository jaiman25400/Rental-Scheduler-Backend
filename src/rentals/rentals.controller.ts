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
import { rentals } from './rentals.mock';
import { v4 as uuidv4 } from 'uuid';

@Controller()
export class RentalsController {
  constructor(private rentalServices: RentalsService) {}

  @Get()
  public getRentals() {
    console.log('GET API :');
    return this.rentalServices.getProperties();
  }

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
  // public postRentals(
  //   @Body() rental: Rentals,
  //   @UploadedFiles() files: Array<Express.Multer.File>,
  // ) {
  //   console.log('API Hit::: ', rental);

  //   const fileLinks: string[] = []; // Array to store file links

  //   // Process each file
  //   files.forEach((file) => {
  //     const fileLink = `http://localhost:3000/${file.originalname}`;
  //     console.log('File Link: ', fileLink);
  //     fileLinks.push(fileLink); // Push the file link to the array
  //   });

  //   // Include the file links in the rental object
  //   if (!rental.images) {
  //     rental.images = []; // Initialize the array if it's not already initialized
  //   }
  //   rental.images.push(...fileLinks); // Push the file links to the images array

  //   const mockDataLength = rentals.length;
  //   rental.id = (mockDataLength + 1).toString();

  //   // Add the current date
  //   rental.cleaningDate = new Date();
  //   console.log('Rental :', rental);
  //   return this.rentalServices.postProperties(rental);
  // }
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

    // Generate UUID for rental ID
    rental.id = uuidv4();

    // Add the current date
    console.log('Rental :', rental);
    return this.rentalServices.postProperties(rental);
  }
}

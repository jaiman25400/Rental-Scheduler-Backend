import { Injectable } from '@nestjs/common';
import { rentals } from './rentals.mock';
import { Rentals } from './rentals.interface';

@Injectable()
export class RentalsService {
  private props = rentals;

  public getProperties() {
    return this.props;
  }

  public postProperties(data: Rentals) {
    return this.props.push(data);
  }
}

import { Injectable } from '@nestjs/common';
import { rentals, cleaningDB } from './rentals.mock';
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

  public generateTeams() {
    const cleans = cleaningDB.cleans;
    const personnel = cleaningDB.personnel;

    const teams = [];

    return teams;
  }
}

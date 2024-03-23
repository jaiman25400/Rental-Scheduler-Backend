export interface Rentals {
  id: string;
  propertyName: string;
  cleaningDate: Date;
  description: string;
  images: string[];
}

//Optional Task
export interface CleaningTask {
  id: number;
  region: string;
  unit: string;
  time1person: number;
  time2person: number;
}

export interface Personnel {
  id: number;
  cleaner: string;
  region: string[];
}

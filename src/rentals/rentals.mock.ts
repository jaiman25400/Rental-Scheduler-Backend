import { Rentals } from './rentals.interface';

export const rentals: Rentals[] = [
  {
    id: '1',
    propertyName: 'Beach House',
    cleaningDate: new Date('2024-03-01'),
    description: 'Full house cleaning after checkout.',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    ],
  },
  {
    id: '2',
    propertyName: 'Mountain Cabin',
    cleaningDate: new Date('2024-03-05'),
    description: 'Cosy cabin in the woods.',
    images: [
      'https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg',
    ],
  },
  {
    id: '3',
    propertyName: 'City Apartment',
    cleaningDate: new Date('2024-03-10'),
    description: 'Modern apartment in the heart of the city.',
    images: [
      'https://images.pexels.com/photos/259602/pexels-photo-259602.jpeg',
      'https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg',
    ],
  },
  {
    id: '4',
    propertyName: 'Lakefront Cottage',
    cleaningDate: new Date('2024-03-6'),
    description: 'Charming cottage by the lake.',
    images: ['https://wallpaperaccess.com/full/2315968.jpg'],
  },
];

//Optional Task
export const cleaningDB = {
  cleans: [
    {
      Clean_ID: 1,
      Region: 'AB',
      Unit: 'Calgary Unit 1',
      Time1person: 90,
      Time2persons: 60,
    },
    {
      Clean_ID: 2,
      Region: 'AB',
      Unit: 'Calgary Unit 2',
      Time1person: 105,
      Time2persons: 65,
    },
    {
      Clean_ID: 3,
      Region: 'AB',
      Unit: 'Calgary Unit 3',
      Time1person: 60,
      Time2persons: 44,
    },
    {
      Clean_ID: 4,
      Region: 'AB',
      Unit: 'Calgary Unit 4',
      Time1person: 80,
      Time2persons: 50,
    },
    {
      Clean_ID: 5,
      Region: 'BC',
      Unit: 'Vancouver Unit 1',
      Time1person: 50,
      Time2persons: 40,
    },
    {
      Clean_ID: 6,
      Region: 'BC',
      Unit: 'Vancouver Unit 2',
      Time1person: 80,
      Time2persons: 40,
    },
    {
      Clean_ID: 7,
      Region: 'BC',
      Unit: 'Vancouver Unit 3',
      Time1person: 100,
      Time2persons: 60,
    },
  ],
  personnel: [
    { Personnel_ID: 1, Cleaner: 'Jane', Region: ['AB', 'BC'] },
    { Personnel_ID: 2, Cleaner: 'John', Region: ['AB'] },
    { Personnel_ID: 3, Cleaner: 'Rosy', Region: ['BC'] },
    { Personnel_ID: 4, Cleaner: 'Rex', Region: ['AB', 'BC'] },
  ],
};

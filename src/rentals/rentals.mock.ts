import { Rentals } from './rentals.interface';
import { format } from 'date-fns';

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

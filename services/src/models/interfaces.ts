import { Document } from 'mongoose';

export interface IPhone extends Document {
  title: string;
  price: number;
  description: string;
  photos: string[];
  brand: string;
}

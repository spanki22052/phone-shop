import mongoose, { Schema } from 'mongoose';
import { IPhone } from './interfaces';

const phoneSchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    photos: { type: [String], required: true },
    brand: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPhone>('Phones', phoneSchema);

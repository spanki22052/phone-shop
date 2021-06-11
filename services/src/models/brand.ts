import mongoose, { Schema } from 'mongoose';
import { Brands } from '../interfaces/brand';

const brandsSchema = new mongoose.Schema(
  {
    brandslist: { type: [String], required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Brands', brandsSchema);

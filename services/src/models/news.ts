import mongoose, { Schema } from 'mongoose';
import { news } from '../interfaces/news';

const NewsSchema = new Schema<news>(
  {
    date: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    photos: { type: [String], required: true },
    new: { type: [String], required: true },
    categories: { type: [String], required: true },
  },
  { timestamps: true }
);

export default mongoose.model('News', NewsSchema);

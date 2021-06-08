import mongoose from 'mongoose';
import express from 'express';
import * as dotenv from 'dotenv';
import Phone from './models/phone';

dotenv.config({ path: `${__dirname}/../.env` });

const app = express();
const port: number = 3000;

mongoose.connect(process.env.DB_URL as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newPhone = new Phone({
  title: 'Iphone 7 Plus 256gb',
  description: 'Good phone.',
  photos: [],
  price: 25000,
  brand: 'Iphone',
});

newPhone.save();

app.listen(port, (): void => {
  console.log(`Working on port ${port}`);
});

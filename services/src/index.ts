import mongoose from 'mongoose';
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../.env` });

const app = express();
const port: number = 3000;

mongoose.connect(process.env.DB_URL as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, (): void => {
  console.log(`Working on port ${port}`);
});

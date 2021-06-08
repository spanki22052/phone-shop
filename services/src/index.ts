import mongoose from 'mongoose';
import express, { Application } from 'express';
import Phone from './models/phone';
import { graphql, buildSchema } from 'graphql';
import { ApolloServer, gql } from 'apollo-server-express';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../.env` });

const app: Application = express();
const port: number = 3000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.applyMiddleware({ app });

mongoose.connect(process.env.DB_URL as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const newPhone = new Phone({
//   title: 'Iphone 7 Plus 256gb',
//   description: 'Good phone.',
//   photos: [],
//   price: 25000,
//   brand: 'Iphone',
// });

// newPhone.save();

app.listen(port, (): void => {
  console.log(`Working on port ${port} - ${server.graphqlPath}`);
});

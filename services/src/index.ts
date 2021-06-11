import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { schema } from './graphql/schema';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: `${__dirname}/../.env` });

const app = express();

const PORT: number = 4000;
mongoose.connect(process.env.DB_URL as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create GraphQL server
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

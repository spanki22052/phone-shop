import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    hello: String
  }

  type Phone {
    _id: ID
    title: String
    description: String
    photos: [String]
    price: Int
    brand: String
  }

  type Mutation {
    addPhone(
      title: String
      description: String
      brand: String
      price: Int
      photos: [String]
    ): Phone
  }
`;

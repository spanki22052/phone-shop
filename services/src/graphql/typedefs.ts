import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    hello: String
    phoneid(id: ID!): Phone
    showbrands: Brands!
    clearBrands: Boolean
    showphones: [Phone]
  }

  type Phone {
    _id: ID
    title: String
    description: String
    photos: [String]
    price: Int
    brand: String
  }

  type Brands {
    brandslist: [String]
  }

  type Mutation {
    addPhone(
      title: String
      description: String
      brand: String
      price: Int
      photos: [String]
    ): Phone
    addBrand(title: String): Brands
  }
`;

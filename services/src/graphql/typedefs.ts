import { gql } from 'apollo-server-express';
export default gql`
  type Query {
    hello: String
    phoneid(id: ID!): Phone
    showbrands: Brands!
    clearBrands: Boolean
    showphones: [Phone]
    shownews: [News]
  }

  type Phone {
    _id: ID
    title: String
    description: String
    photos: [String]
    price: Int
    brand: String
  }

  type News {
    date: String
    title: String
    subtitle: String
    photos: [String]
    new: String
    categories: [String]
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
    addNew(
      date: String
      title: String
      subtitle: String
      photos: [String]
      new: String
      categories: [String]
    ): News
    addBrand(title: String): Brands
  }
`;

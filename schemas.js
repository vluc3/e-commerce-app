const { gql } = require('apollo-server');

const schemas = gql`
  type Query {
    category(id: ID!): Category
    categories: [Category!]!

    product(id: ID!): Product
    products(filter: ProductsFilter): [Product!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilter): [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    category: Category
    reviews: [Review!]!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilter {
    onSale: Boolean
    avgRating: Int
  }
`;

module.exports = schemas;

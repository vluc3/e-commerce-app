const { gql } = require('apollo-server');

const schemas = gql`
  type Query {
    category(id: ID!): Category
    categories: [Category!]!

    product(id: ID!): Product
    products: [Product!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    category: Category
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

module.exports = schemas;

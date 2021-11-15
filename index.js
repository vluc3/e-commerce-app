const { ApolloServer } = require('apollo-server');

const schemas = require('./schemas');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const Category = require('./resolvers/Category');
const Product = require('./resolvers/Product');

const categories = require('./database/categories');
const products = require('./database/products');
const reviews = require('./database/reviews');

const database = {
  categories,
  products,
  reviews
}

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product
  },
  context: {
    database
  }
});

server.listen().then(( { url }) => {
  console.log(`Server is ready at ${url}`);
});
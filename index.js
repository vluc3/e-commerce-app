const { ApolloServer } = require('apollo-server');

const schemas = require('./schemas');

const Query = require('./resolvers/Query');
const Category = require('./resolvers/Category');
const Product = require('./resolvers/Product');

const categories = require('./database/categories');
const products = require('./database/products');

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: {
    Query,
    Category,
    Product
  },
  context: {
    categories,
    products
  }
});

server.listen().then(( { url }) => {
  console.log(`Server is ready at ${url}`);
});
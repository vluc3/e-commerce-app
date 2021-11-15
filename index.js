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

const apolloServer = new ApolloServer({
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

apolloServer.listen().then(({ url }) => {
  console.log();
  console.log(`Apollo server is ready at ${url}`);
});
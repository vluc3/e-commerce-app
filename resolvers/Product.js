Product = {
  category: ({ categoryId }, args, { database }) => {
    return database.categories.find(category => category.id === categoryId);
  },
  reviews: ({ id }, args, { database }) => {
    return database.reviews.filter(review => review.productId === id);
  }
};

module.exports = Product;
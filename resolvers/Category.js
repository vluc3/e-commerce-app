Category = {
  products: ({ id: categoryId }, args, { products }) => {
    return products.filter((product) => {
      return product.categoryId === categoryId;
    });
  }
};

module.exports = Category;
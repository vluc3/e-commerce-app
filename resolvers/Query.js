Query = {
  category: (parent, { id }, { categories }) => {
    return categories.find(category => category.id === id);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },

  product: (parent, { id }, { products }) => {
    return products.find(product => product.id === id);
  },
  products: (parent, args, { products }) => {
    return products;
  },
};

module.exports = Query;

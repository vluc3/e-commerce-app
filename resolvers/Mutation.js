const { v4: uuid } = require('uuid');

Mutation = {
  addCategory: (parent, { input }, { database }) => {
    const { name } = input;

    const result = {
      id: uuid(),
      name
    };

    database.categories.push(result);
    return result;
  },
  updateCategory: (parent, { id, input }, { database }) => {
    const index = database.categories.findIndex(category => category.id === id);

    if (index > -1) {
      database.categories[index] = {
        ...database.categories[index],
        ...input
      };

      return database.categories[index];
    }

    return null;
  },
  deleteCategory: (parent, { id }, { database }) => {
    const length = database.categories.length;
    database.categories = database.categories.filter(category => category.id !== id);
    const result = database.categories.length < length;

    if (result) {
      database.products = database.products.map(product => {
        if (product.categoryId === id) {
          return {
            ...product,
            categoryId: null
          };
        } else {
          return product;
        }
      });
    }

    return result;
  },
  addProduct: (parent, { input }, { database }) => {
    const {
      name,
      description,
      categoryId,
      image,
      price,
      onSale,
      quantity,
     } = input;

    const result = {
      id: uuid(),
      name,
      description,
      categoryId,
      image,
      price,
      onSale,
      quantity,
    };

    database.products.push(result);
    return result;
  },
  updateProduct: (parent, { id, input }, { database }) => {
    const index = database.products.findIndex(product => product.id === id);

    if (index > -1) {
      database.products[index] = {
        ...database.products[index],
        ...input
      };

      return database.products[index];
    }

    return null;
  },
  deleteProduct: (parent, { id }, { database }) => {
    const length = database.products.length;
    database.products = database.products.filter(product => product.id !== id);
    const result = database.products.length < length;

    if (result) {
      database.reviews = database.reviews.filter(review => review.productId !== id);
    }

    return result;
  },
  addReview: (parent, { input }, { database }) => {
    const {
      date,
      title,
      productId,
      comment,
      rating,
     } = input;

    const result = {
      id: uuid(),
      date,
      title,
      productId,
      comment,
      rating,
    };

    database.reviews.push(result);
    return result;
  },
  updateReview: (parent, { id, input }, { database }) => {
    const index = database.reviews.findIndex(review => review.id === id);

    if (index > -1) {
      database.reviews[index] = {
        ...database.reviews[index],
        ...input
      };

      return database.reviews[index];
    }

    return null;
  },
  deleteReview: (parent, { id }, { database }) => {
    const length = database.reviews.length;
    database.reviews = database.reviews.filter(review => review.id !== id);
    const result = database.reviews.length < length;
    return result;
  },
}

module.exports = Mutation;

Query = {
  category: (parent, { id }, { database }) => {
    return database.categories.find(category => category.id === id);
  },
  categories: (parent, args, { database }) => {
    return database.categories;
  },

  product: (parent, { id }, { database }) => {
    return database.products.find(product => product.id === id);
  },
  products: (parent, { filter }, { database }) => {
    let filteredProducts = database.products;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale !== null) {
        filteredProducts = filteredProducts.filter(product => {
          return product.onSale === onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter(product => {
          let sumRating = 0;
          let reviewCount = 0;

          database.reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              reviewCount++;
            }
          });

          const avgProductRating = sumRating / reviewCount;
          return avgProductRating >= avgRating;
        });
      }
    }

    return filteredProducts;
  }
};

module.exports = Query;

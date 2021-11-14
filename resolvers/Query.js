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
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

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

          reviews.forEach(review => {
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

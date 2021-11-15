Category = {
  products: ({ id: categoryId }, { filter }, { database }) => {
    let filteredProducts = database.products.filter((product) => {
      return product.categoryId === categoryId;
    });

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
        });
      }
    }

    return filteredProducts;
  }
};

module.exports = Category;
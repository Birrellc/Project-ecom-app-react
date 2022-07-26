import { createContext, useState } from 'react';

import ProductData from '../shopData.json';

export const ProductsContext = createContext({
  products: [],
  // todo - setter function for products
});

export const ProductsProvider = ({ children }) => {
  // import hardcoded data as a test
  const [products, setProducts] = useState(ProductData);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

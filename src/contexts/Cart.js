import { createContext, useState } from 'react';

// helper function to check if matching product
const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  // compare carrItem.id to productToAdd.id for each item and if true(matches) return the item that exists in both
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, increment quantity

  if (existingCartItem) {
    // check if cartItem is same as Product we're trying to add
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? // if a product in the cart matches a product we're adding spread cartItem to a new array and increase the quanity else just return cartItem
          // new object with item added and increased quantity
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems / new cart item
  // this stage - no existing product found
  // grab all existing cart items and also the product that is being added to the cart with a quantity of 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  // method to track items and quantity added to cart
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // triggers when users click add to cart
  const addItemToCart = (productToAdd) => {
    // decide if need to make a new cart item if cart is empty of the matching product
    // if there is already 1 of the product just increase the quantity by 1
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

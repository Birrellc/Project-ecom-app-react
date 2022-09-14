import { createContext, useState, useEffect } from 'react';

//* Note: react doesnt register the value when mutated so it won't rerender the component so need to create a new object with ... to rerender the component with the new changes

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

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if quantity is equal to 1, if it is remove item from cart instead of decrement
  if (existingCartItem.quantity === 1) {
    // filter items that = false, if true keep the value
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // map through items, if cartItem = cartItemToRemove give a new object with the cartitems with a lower quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, cartItemToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  // method to track items and quantity added to cart
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // calculate the count of items in the cart
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  // triggers when users click add to cart
  const addItemToCart = (productToAdd) => {
    // decide if need to make a new cart item if cart is empty of the matching product
    // if there is already 1 of the product just increase the quantity by 1
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const deleteItemFromCart = (cartItemToDelete) => {
    setCartItems(deleteCartItem(cartItems, cartItemToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

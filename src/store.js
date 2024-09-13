import {create} from 'zustand';

export const useStore = create((set) => ({
  products: [],
  cartItems: [],
  isCartOpen: false,
  totalAmount: 0,

  setProducts: (products) => set({ products }),

  addToCart: (product) =>
    set((state) => {
      const itemInCart = state.cartItems.find((item) => item.id === product.id);
      let updatedCart;

      if (itemInCart) {
        updatedCart = state.cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
      }

      const totalAmount = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return { cartItems: updatedCart, totalAmount };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cartItems.filter((item) => item.id !== productId);
      const totalAmount = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { cartItems: updatedCart, totalAmount };
    }),

  toggleCartDropdown: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

import { createContext, ReactNode, useEffect, useState } from "react";
import { Fruit } from "../pages/Home/components/FruitCard";
import { produce } from 'immer'

export interface CartItem extends Fruit {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addFruitToCart: (fruit: CartItem) => void
  changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const FRUIT_ITEMS_STORAGE_KEY = 'fruitDelivery:cartItems'

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(FRUIT_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const price = 9.9;
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + price * cartItem.quantity
  }, 0)

  function addFruitToCart(fruit: CartItem) {
    const fruitAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === fruit.id)

    const newCart = produce(cartItems, (draft) => {
      if(fruitAlreadyExistsInCart < 0) {
        draft.push(fruit)
        
      } else {
        draft[fruitAlreadyExistsInCart].quantity += fruit.quantity;
      }
    })
    
    setCartItems(newCart)
  }

  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const fruitExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if(fruitExistsInCart >= 0) {
        const item = draft[fruitExistsInCart];
        draft[fruitExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const fruitExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if(fruitExistsInCart >= 0) {
        draft.splice(fruitExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(FRUIT_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addFruitToCart, changeCartItemQuantity, removeCartItem, cartItemsTotal, cleanCart }}>
      {children}
    </CartContext.Provider>
  )
}
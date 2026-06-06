import { createContext, useContext, useReducer, type ReactNode } from 'react'

export interface CartItem {
  productId: string
  productName: string
  price: number
  size: string
  quantity: number
  image: string
}

type CartAction =
  | { type: 'ADD_ITEM'; item: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; productId: string; size: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; size: string; quantity: number }
  | { type: 'CLEAR_CART' }

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (i) => i.productId === action.item.productId && i.size === action.item.size,
      )
      if (existing) {
        return state.map((i) =>
          i.productId === action.item.productId && i.size === action.item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        )
      }
      return [...state, { ...action.item, quantity: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (i) => !(i.productId === action.productId && i.size === action.size),
      )
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return state.filter(
          (i) => !(i.productId === action.productId && i.size === action.size),
        )
      }
      return state.map((i) =>
        i.productId === action.productId && i.size === action.size
          ? { ...i, quantity: action.quantity }
          : i,
      )
    case 'CLEAR_CART':
      return []
  }
}

interface CartContextValue {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addItem: (item) => dispatch({ type: 'ADD_ITEM', item }),
        removeItem: (productId, size) => dispatch({ type: 'REMOVE_ITEM', productId, size }),
        updateQuantity: (productId, size, quantity) =>
          dispatch({ type: 'UPDATE_QUANTITY', productId, size, quantity }),
        clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}

import CartContext from "./Cart-Context"
import { useReducer } from "react"

const defaultCartState = {
    items: [],
    totalAmount: 0 
}

const cartReducer = (state,action) => {
    if( action.type === "ADD"){
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price
        *action.item.amount
        return{
            updatedItems: updatedItems,
            updatedTotalAmount:updatedTotalAmount
        }
    }
    return defaultCartState
}
//item will receive name, amount item added, the price  
//concat add new items to array, push overwrite existing array

const [cartState,dispatchOfAction] = useReducer (cartReducer, defaultCartState)

const CartProvider = (props) => {
useReducer(cartReducer,defaultCartState)

const addIemToCartHandler = (item) => {
    dispatchOfAction({type:"ADD" , item:item})
}

const removeItemFromCardHandler = (id) => {
    dispatchOfAction({type:"REMOVE" , id:id})
}

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addIemToCartHandler,
        removeItem: removeItemFromCardHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
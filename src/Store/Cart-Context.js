import React from "react"

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
    //only for auto completion letter
    //will not use the value
})

export default CartContext

import classes from "./HeaderCartButton.module.css"
import CartIcon from "../../assets/CartItemIcon"
import { useContext } from "react"
import CartContext from "../../Store/Cart-Context"

const Button = (props) => {
   const cartCtx = useContext(CartContext)

   const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount
   },0)

    return(
       <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default Button
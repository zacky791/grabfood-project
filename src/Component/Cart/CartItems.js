import Button from "../UI/Button"
import Modal from "../UI/Modal"
import classesBtn from "../UI/Button.module.css"
import CartForm from "./CartForm"
import classes from './CartItems.module.css'

const CartItems = (props) => {

    const cartData = (
    <ul>
        {
            [{id:"g1",name:"sushi",amount:2,price:12.49}].map (
                (data) => <li> <CartForm name={data.name} price={data.price}
                 amount={data.amount}/> </li>
                // {<li> {data.map} </li>}
            )
        }
    </ul>
    )

    return(
        <Modal>
        {cartData}
        <div className={classes.container}>
            <span className={classes.title}>Total Amount</span>
            <span className={classes.price}>$34.23</span>
        </div>
           <div className={classes.containerbtn}>
             <Button onClick={props.toCloseCart} className={classesBtn.testing}>Close</Button>
             <Button>Order</Button>
           </div>         
        </Modal>
    )
    
}

export default CartItems

import classes from "./CartForm.module.css"
//data in object = id , name, amount , price

const CartForm = (props) => {
    return(<div className={classes.scontainer}>
        <div className={classes.maincontainer}>
            <h2 className="h2">{props.name}</h2>
            <div className={classes.container}>
            <span className={classes.span}>{`$${props.price}`}</span>
            <input value={`x ${props.amount}`} />
            </div>
        </div>
        <div className={classes.containerbtn}>
          <button className={classes.btn}>--</button>
          <button className={classes.btn}>+</button>
      </div>
      </div>
    )
}

export default CartForm
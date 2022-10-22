import { Fragment } from "react"
import foodImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import Button from "./HeaderCartButton"
import HeaderIcons from "./HeaderIcons"

const Header = (props) => {
    return(
        <Fragment>
        <header className={classes.header}>
            <HeaderIcons/>
            <Button onClick={props.toOpenCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={foodImage} alt="A table of food" />
        </div>
        </Fragment>
    )
}

export default Header
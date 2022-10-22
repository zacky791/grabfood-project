import { Fragment } from "react"
import FoodStatement from "../Layout/FoodStatement"
import AvailableFood from "./AvailableMeals"

const Meals = () => {
    return (
    <Fragment>
    <FoodStatement/>
    <main>
    <AvailableFood/>
    </main>
    </Fragment>
    )
}

export default Meals
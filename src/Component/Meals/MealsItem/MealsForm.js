import InputForm from '../../UI/Input'
import classes from './MealsForm.module.css'

const MealsForm = () => {
    return(<form>
        <InputForm label="Amount" input={{
            id: 'amount',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button className={classes.btn}>+ Add</button>
        </form>
    )
}

export default MealsForm
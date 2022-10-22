import classes from './Input.module.css'

const InputForm = (props) => {
    return<div className={classes.form}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
    </div>
}

export default InputForm
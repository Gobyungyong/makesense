import classes from './Button.module.css'

function Button(props) {
    return (
        <button className={classes.btn} style={props.style} onClick={props.onclick}>{props.children}</button>
    );
}

export default Button;
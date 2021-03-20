
const Button = (props) => {
    return (
        <button 
        className={props.className}
        onClick={props.changeCount}
        >
            {props.title}
        </button>
    )
}

export default Button


import css from "../../styles/form.css";

const {Input} = css


const InputComponent = (props) => {

    const {placeholder, inputTask, action} = props

    const maxLength = 100

    return (
        <>
            <Input
            type={"text"}
            value={inputTask}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={event=> {
                const newValue = event.target.value
                action(newValue)
            }}
            />
        </>
    )
}

export default InputComponent
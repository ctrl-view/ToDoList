import css from "../../styles/form.css";

const { Input } = css

const InputComponent = (props) => {
    const { placeholder, inputValue, action, type = "text" } = props
    const maxLength = 100

    return (
        <Input
            type={type}
            value={inputValue}
            placeholder={placeholder}
            maxLength={type === "text" ? maxLength : undefined}
            onChange={event => {
                const newValue = event.target.value
                action(newValue)
            }}
        />
    )
}

export default InputComponent
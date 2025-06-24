import css from "../../styles/form.css";
import { useState } from "react";

const {Input} = css

const InputComponent = (props) => {
    const {placeholder, inputValue, action, type = "text"} = props
    const [, setIsFocused] = useState(false)
    const maxLength = 100

    const handleDateChange = (event) => {
        let value = event.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length > 2) {
                value = value.slice(0, 2) + '.' + value.slice(2);
            }
            if (value.length > 5) {
                value = value.slice(0, 5) + '.' + value.slice(5);
            }
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
        }
        
        action(value);
    }

    if (type === "date") {
        return (
            <Input
                type="text"
                value={inputValue}
                placeholder={placeholder}
                onChange={handleDateChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                maxLength={10}
            />
        )
    }

    return (
        <Input
            type={type}
            value={inputValue}
            placeholder={placeholder}
            maxLength={type === "text" ? maxLength : undefined}
            onChange={event=> {
                const newValue = event.target.value
                action(newValue)
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    )
}

export default InputComponent

import styled from "styled-components"

const ButtonCSS = styled.button`
    display: block;
    padding: 10px 14px 10px;
    font-family: inherit;
    border-radius: 6px;
    background-color: ${props => props.$primary==='' ? "rgb(229,229,229)" : "rgb(176,243,71)"};
    cursor: pointer;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 5px;
        margin-right: 8px;
    }
    `


const Button = (props) => {

    const {children, onClick, value} = props

    return (
        <ButtonCSS $primary={value} onClick={onClick}>{children}</ButtonCSS>
    )
}

export default Button
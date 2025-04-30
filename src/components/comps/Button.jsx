
import styled from "styled-components"

const ButtonCSS = styled.button`
    display: block;
    padding: 10px 14px 10px;
    font-family: inherit;
    border-radius: 6px;
    background-color: #B0F347;
    cursor: pointer;
    margin-left: 10px;
    @media (max-width: 768px) {
        padding: 5px;
    }
    `


const Button = (props) => {

    const {children, onClick} = props

    return (
        <ButtonCSS onClick={onClick}>{children}</ButtonCSS>
    )
}

export default Button
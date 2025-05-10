import styled from "styled-components"

const ButtonCSS = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    min-width: 48px;
    padding: 0 24px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.$primary === '' ? "#f8f9fa" : "#7cff6b"};
    color: ${props => props.$primary === '' ? "#495057" : "#1a1f2b"};
    cursor: pointer;
    margin: 0 auto;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        background-color: ${props => props.$primary === '' ? "#e9ecef" : "#6cef5a"};
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }

    @media (max-width: 768px) {
        height: 40px;
        min-width: 40px;
        padding: 0 12px;
        font-size: 14px;
        margin: 0 4px;
        border-radius: 6px;
    }
`

const Button = (props) => {
    const {children, onClick, value, disabled} = props

    return (
        <ButtonCSS 
            $primary={value} 
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </ButtonCSS>
    )
}

export default Button
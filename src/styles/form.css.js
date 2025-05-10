import styled from "styled-components"

const css = {
    Wrap: styled.div`
        @media (max-width: 768px) {
            padding: 20px;
        }
    `,
    FormContainer: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        height: auto;
        min-height: 60px;
        border-radius: 12px;
        background: white;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        margin: 40px auto;
        padding: 30px;
        width: 100%;
        max-width: 600px;
        box-sizing: border-box;
        transition: all 0.3s ease;
        &:hover {
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
        }
    `,
    Input: styled.input`
        display: block;
        position: relative;
        font-family: inherit;
        width: 100%;
        height: 48px;
        outline: none;
        border: 2px solid #e9ecef;
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 0 16px;
        margin-bottom: 16px;
        box-sizing: border-box;
        font-size: 15px;
        transition: all 0.2s ease;
        &:focus {
            border-color: #7cff6b;
            background-color: white;
            box-shadow: 0 0 0 3px rgba(124, 255, 107, 0.1);
        }
        &:last-child {
            margin-bottom: 0px;
        }
    `,
    Button: styled.span`
        display: block;
        position: relative;
        width: 220px;
        height: 48px;
        line-height: 46px;
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        background-color: ${props => props.backgroundColor};
        font-weight: 500;
        transition: all 0.2s ease;
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        &:active {
            transform: translateY(0);
        }
    `
}

export default css
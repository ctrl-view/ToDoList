import styled from "styled-components"

const css = {
    HeaderContainer: styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 80px;
    background-color: #1a1f2b;
    padding: 0 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    `,
    FooterContainer: styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #f8f9fa;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    `,
    HeaderCSS: {
        Logo: styled.div`
        font-size: 32px;
        font-weight: 600;
        color: #7cff6b;
        text-shadow: 0 0 10px rgba(176, 243, 71, 0.3);
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.05);
        }
        `,
        MenuContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        gap: 20px;
        `
    }
}

export default css
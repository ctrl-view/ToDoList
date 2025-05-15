import styled from "styled-components"

const css = {
    DataContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        height: auto;
        border-radius: 12px;
        background: white;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        margin: 20px auto 40px;
        padding: 30px;
        width: 100%;
        max-width: 800px;
        box-sizing: border-box;
        transition: all 0.3s ease;
        &:hover {
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
        }
    `,
    ContentLine: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 100%;
        padding: 12px 0;
        border-bottom: 1px solid #e9ecef;
        transition: all 0.2s ease;
        &:hover {
            background-color: #f8f9fa;
        }
        &:last-child {
            margin-bottom: 0px;
            border-bottom: none;
        }
    `,
    ContentCell: styled.span`
        position: relative;
        width: ${props => {
            if (props.width === '70%') {
                return '80%';
            } else if (props.width === '15%') {
                return '10%';
            }
            return props.width;
        }};
        font-size: 15px;
        color: #495057;
        text-align: start;
        box-sizing: border-box;
        word-break: break-word;
        line-height: 1.5;

        @media (max-width: 768px) {
            width: ${props => {
                if (props.width === '70%') {
                    return '70%';
                } else if (props.width === '15%') {
                    return '15%';
                }
                return props.width;
            }};
        }
    `,
    PriorityCell: styled.span`
        display: flex;
        align-items: center;
        width: 5%;
        min-width: 20px;
    `,
    ButtonsLine: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        margin: 0 auto;
        margin-top: 40px;
        width: 100%;
        max-width: 800px;
        box-sizing: border-box;
        gap: 20px;
    `,
    ButtonItem: styled.span`
        display: block;
        position: relative;
        font-size: 14px;
        color: #6c757d;
        cursor: pointer;
        transition: all 0.2s ease;
        padding: 8px 16px;
        border-radius: 6px;
        &:hover {
            color: #495057;
            background-color: #f8f9fa;
        }
    `,
    SelectContainer: styled.div`
        display: flex;
        gap: 10px;
        margin: 10px auto;
        max-width: 800px;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 8px;
        }
    `,
    Select: styled.select`
        height: 40px;
        padding: 0 16px;
        font-size: 14px;
        color: #495057;
        background-color: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        cursor: pointer;
        outline: none;
        transition: all 0.2s ease;
        min-width: 160px;

        &:hover {
            border-color: #7cff6b;
            background-color: white;
        }

        &:focus {
            border-color: #7cff6b;
            background-color: white;
            box-shadow: 0 0 0 3px rgba(124, 255, 107, 0.1);
        }

        @media (max-width: 768px) {
            width: 100%;
            min-width: unset;
        }
    `,
    PriorityBadge: styled.span`
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${props => props.color || '#7cff6b'};
        margin-right: 8px;
    `
}

export default css
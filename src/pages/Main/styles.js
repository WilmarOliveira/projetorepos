import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    color: #ff0000;
    background: #fff;
    max-width: 700px;
    padding: 30px;
    border-radius: 5px;
    margin: 80px auto;

    h1 {
        font-size: 20px;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h4 {
        text-align: center;
        font-size: 10px;
        margin-top: 20px;
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        max-width: 100%;
        border: 1px solid ${props => props.error ? '#ff0000' : '#808080'};
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
    }

    input:focus {
        border: 1px solid #000;
    }
`;

//Criando animação no botão
const animate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: "submit",
    disabled: props.loading
}))`
    padding: 8px;
    background: #0D2636;
    color: #fff;
    border: 0;
    border-radius: 5px;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading && 
    css`
        svg {
            animation: ${animate} 2s linear infinite;
        }
    `}
`;

export const List = styled.ul`
    margin-top: 30px;
    list-style: none;

    li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
        color: #0D2636;
    }

    a {
        text-decoration: none;
        color: #0D2636;
    }
`;

export const DeleteButton = styled.button.attrs({
    type:"button"
})`
    background: transparent;
    border: 0;
    padding: 5px;
`
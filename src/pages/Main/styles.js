import styled from 'styled-components';

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
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        max-width: 100%;
        border: 1px solid #808080;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: "submit"
})`
    padding: 8px;
    background: #0D2636;
    color: #fff;
    border: 0;
    border-radius: 5px;
`;
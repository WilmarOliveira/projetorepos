import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 700px;
  padding: 30px;
  margin: 80px auto;
  background: #fff;
  border-radius: 8px;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        max-width: 130px;
        margin: 20px 0 20px;
    }

    h1 {
        color: #0D2636;
        text-transform: uppercase;
    }

    p {
        color: #000;
        line-height: 3.4;
        font-size: 14px;
    }
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 100vh;
`;

export const BackButton = styled(Link)`
    color: #000;
    border: 0;
    outline: 0;
    background: transparent;

    :hover {
        color: #0D2636;
    }
`;

export const IssuesList = styled.ul`

    margin: 30px;
    padding: 30px;

    li {
        display: flex;
        flex: 1;

        & + li {
        margin-top: 20px;
        }

        img {
        width: 36px;
        height: 36px;
        border: 1px solid #0D2636;
        border-radius: 50%;
        }

        div {
            margin-left: 10px;
        }

        strong {
            font-size: 15px;

            a {
            text-decoration: none;
            color: #0D2636;

                &:hover {
                    color: #ff0000;
                    text-decoration: underline;
                }
            }

            span {
                background: #000;
                color: #fff;
                border-radius: 4px;
                padding: 2px;
                font-size: 12px;
                margin: 5px;
            }
        }

        p {
            font-style: italic;
        }

        

    }

`;
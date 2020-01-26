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

export const IssuesList = styled.ul``;
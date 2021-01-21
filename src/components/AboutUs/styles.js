import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const People = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 150px;
  flex-direction: row;
  padding-top: 40px;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
    padding: 30px 40px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 100px;
    border-radius: 100%;
  }

  span {
    font-size: 18px;
    width: 80%;
    text-align: center;
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (max-width: 700px) {
    span {
      width: 100%;
    }
  }
`;

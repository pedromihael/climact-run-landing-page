import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: #fff;
  overflow-x: hidden;
`;

export const Logo = styled.div`
  height: 20vh;
  width: 30vw;
  padding: 40px 60px;

  img {
    width: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    width: 60vw;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  padding-left: 60px;
  padding-top: 20px;

  h1 {
    font-family: 'Anton', sans-serif !important;
    font-size: 44px;
    width: 95%;
    line-height: 55px;
    letter-spacing: 2px;
  }

  span {
    font-size: 21px;
    width: 60%;
    padding-top: 20px;
  }
`;

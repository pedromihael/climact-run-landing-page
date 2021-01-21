import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: #fff;
  overflow-x: hidden;
  padding-bottom: 40px;
`;

export const Logo = styled.div`
  height: 20vh;
  width: 30vw;
  padding: 40px 60px;

  img {
    width: 100px;
  }

  @media (max-width: 700px) {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    width: 60vw;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;

    > img {
      position: static;
      top: none;
      right: none;
      width: 100vw;
      margin-top: 40px;
    }
  }
`;

export const SecondContent = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin-bottom: 120px;

  > img {
    width: 50vw;
    height: auto;
  }

  @media (max-width: 700px) {
    margin-bottom: 40px;
    padding-top: 40px;
    display: grid;
    grid-template-areas:
      'description'
      'heroImage';

    > img {
      padding: 40px;
      width: 100vw;
      grid-area: heroImage;
    }
  }
`;

export const SecondText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 40px;
  margin-left: 10px;

  span {
    font-size: 21px;
    font-weight: 700;
    padding-top: 20px;
    text-align: right;
  }

  @media (max-width: 700px) {
    grid-area: description;
    padding: 0 20px;

    span {
      padding-top: 0;
      padding-top: 20px;
      text-align: left;
    }
  }
`;

export const MainText = styled.div`
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
    font-weight: 700;
    padding-top: 20px;
  }

  @media (max-width: 700px) {
    padding-left: 20px;
    width: 100vw;
    padding: 0 20px;
    align-items: center;

    h1 {
      margin-bottom: 20px;
      text-align: center;
      width: 100%;
      font-size: 33px;
      line-height: 40px;
    }

    span {
      padding-left: 40px;
      padding-right: 40px;

      width: 100%;
      text-align: center;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: #84c0fc;
  overflow-y: hidden;
`;

export const Content = styled.div`
  position: absolute;
  top: 35vh;
  padding: 0 30px;
  width: 100vw;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 40px;
    margin-bottom: 10px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  span {
    color: #333;
    font-family: sans-serif;
    font-weight: 600;
    padding-top: 10px;
    /* text-shadow: 0 3px 3px rgba(0, 0, 0, 0.2), 0 3px 3px rgba(0, 0, 0, 0.3); */

    &.black {
      padding-top: 15px;
      color: #333 !important;
      text-shadow: none;
    }
  }

  @media (min-width: 700px) {
    left: 45vw;
    top: 30vh;

    span {
      max-width: 30%;

      &.black {
        max-width: 100%;
      }
    }
  }
`;

export const ActionButton = styled.button`
  background: #f1f1f1;
  border: none;
  color: #212121;
  cursor: pointer;
  padding: 5px;
  text-transform: uppercase;
  font-size: 22px;
  margin-top: 40px;
  padding: 5px 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    background: #dcdcdc;
    border-radius: 2px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  a {
    text-decoration: none;
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  /* background: rgb(157, 207, 255); */
  background: -moz-linear-gradient(
    90deg,
    rgba(157, 207, 255, 0) 34%,
    rgba(133, 194, 253, 1) 47%,
    rgba(140, 201, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(157, 207, 255, 0) 34%,
    rgba(133, 194, 253, 1) 47%,
    rgba(140, 201, 255, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(157, 207, 255, 0) 34%,
    rgba(133, 194, 253, 1) 47%,
    rgba(140, 201, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9dcfff",endColorstr="#8cc9ff",GradientType=1);

  @media (max-width: 700px) {
    background: rgb(157, 207, 255);
    background: -moz-linear-gradient(
      180deg,
      rgba(157, 207, 255, 0) 31%,
      rgba(133, 194, 253, 1) 47%,
      rgba(133, 194, 253, 1) 47%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(157, 207, 255, 0) 31%,
      rgba(133, 194, 253, 1) 47%,
      rgba(133, 194, 253, 1) 47%
    );
    background: linear-gradient(
      180deg,
      rgba(157, 207, 255, 0) 31%,
      rgba(133, 194, 253, 1) 47%,
      rgba(133, 194, 253, 1) 47%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9dcfff",endColorstr="#62b2ff",GradientType=1);
  }
`;

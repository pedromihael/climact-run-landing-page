import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: #84c0fc;
  overflow-y: hidden;
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
    display: none;
  }
`;

export const TextVideo = styled.div`
  position: relative;
  height: 45vh;
  /* display: flex;
  justify-content: center; */

  h1 {
    text-align: center;
    position: absolute;
    bottom: 0;
    color: #f1f1f1;
  }
`;

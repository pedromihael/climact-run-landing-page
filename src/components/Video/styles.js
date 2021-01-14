import styled from 'styled-components';

export const Container = styled.video`
  height: 110vh;
  @media (max-width: 500px) {
    height: auto;
    width: 100vw;
    position: absolute;
    top: -5vh;
  }
`;

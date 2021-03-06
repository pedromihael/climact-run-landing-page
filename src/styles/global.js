import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
      font-family: 'PT Sans', sans-serif;
      &::-webkit-scrollbar {
          display: none;
      }
    }

  body {
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      color: #233863;

  } 
`;

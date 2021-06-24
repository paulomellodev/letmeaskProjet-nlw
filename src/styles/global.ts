import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root{
    --white: #F8F8F8;
    --gray: #29292E;
    --purple: #835AFD;
    --lightGray: #A8A8B3;
    --googleRed: #ea4335;
  }
  body{
    color: var(--gray);
    background: var(--white);
  }
  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
`;

// export const appearLeft = keyframes`
//   from{
//     opacity: 0;
//     transform: translateX(-100px);
//   }
//   to{
//     opacity: 1;
//     transform: translateX(0px);
//   }
// `;
// export const appearRight = keyframes`
//   from{
//     opacity: 0;
//     transform: translateX(100px);
//   }
//   to{
//     opacity: 1;
//     transform: translateX(0px);
//   }
// `;
// export const appearTop = keyframes`
//   from{
//     opacity: 0;
//     transform: translateY(-100px);
//   }
//   to{
//     opacity: 1;
//     transform: translateY(0px);
//   }
// `;

// export const appearBottom = keyframes`
//   from{
//     opacity: 0;
//     transform: translateY(100px);
//   }
//   to{
//     opacity: 1;
//     transform: translateY(0px);
//   }
// `;

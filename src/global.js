import { css } from 'linaria';

export const globals = css`
  :global {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    html, 
    body,
    h1,
    h2,
    ul,
    p {
      padding: 0;
      margin: 0;
    }
    
    ul {
      list-style: none;
    }
  }
`;

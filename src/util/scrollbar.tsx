import { css } from "styled-components";

// Custom scrollbar component
const Scrollbar = css`
  /* Width */
  ::-webkit-scrollbar {
    width: 10px;
    background: none;
    border-radius: 16px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
    background-clip: padding-box;
    border: 6px solid rgba(0, 0, 0, 0);
    border-radius: 6px;
    margin: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.primary.light};
    background-clip: padding-box;
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 6px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.background};
    background-clip: padding-box;
    border: 2px solid rgba(0, 0, 0, 0);
  }
`;

export default Scrollbar;

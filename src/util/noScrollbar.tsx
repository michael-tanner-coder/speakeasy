import { css } from "styled-components";

// Keep scrollbar invisible in scrollable areas
const NoScrollbar = css`
  /* Width */
  ::-webkit-scrollbar {
    width: 0px;
    background: none;
    border-radius: 16px;
  }
`;

export default NoScrollbar;

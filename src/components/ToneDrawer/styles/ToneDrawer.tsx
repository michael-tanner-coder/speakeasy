import styled from "styled-components/macro";
import ToneDrawerProps from "../ToneDrawer.interface";
import NoScrollbar from "../../../util/noScrollbar";

const ToneDrawerWrapper = styled.div<ToneDrawerProps>`
  /* Colors */
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text_primary};

  /* Shape + Size */
  height: ${(props) => (props.open ? `280px` : "0px")};
  width: 100%;
  transition: all 0.4s;
  ${(props) => {
    if (props.open) {
      return `
        padding-top: 3rem;
        padding-bottom: 15vh;
    `;
    } else return `padding: 0px;`;
  }}

  /* Scrolling */
  overflow-x: scroll;
  ${NoScrollbar};

  /* Flex + Alignment */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* Layer */
  z-index: ${({ theme }) => theme.z_index.drawer};

  /* Classes */
  .tones {
    display: grid;
    grid-template-columns: auto auto auto;

    ${({ theme }) => {
      return `@media(max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: auto auto;
  }
    `;
    }};

    ${({ theme }) => {
      return `@media(max-width: ${theme.breakpoints.xs}) {
    grid-template-columns: auto;
  }
    `;
    }};
  }
`;

export default ToneDrawerWrapper;

import styled from "styled-components/macro";
import HeaderProps from "../Header.interface";

const HeaderWrapper = styled.header<HeaderProps>`
  /* Colors */
  background-color: ${({ theme }) => theme.color.primary.main};
  color: white;

  /* Size + Space */
  box-sizing: border-box;
  height: fit-content;
  min-height: 50px;
  width: 100%;
  max-width: 728px;
  padding: ${({ theme }) => theme.spacing.padding.sm};

  /* Position */
  position: fixed;
  top: 0;

  /* Display */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${({ theme }) => theme.z_index.header};

  /* Elements */
  h1 {
    margin: 0;
  }
`;

export default HeaderWrapper;

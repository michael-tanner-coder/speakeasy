import styled from "styled-components/macro";
import LightenOrDarkenHexColor from "../../../util/LightenOrDarkenHexColor";

const SignInWrapper = styled.div`
  /* Colors */
  background: ${({ theme }) => {
    return LightenOrDarkenHexColor(theme.color.background, -10);
  }};
  color: white;

  /* Text */
  text-align: center;

  /* Display */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Classes */
  .sign-in {
    max-width: 400px;
    margin: 0 auto;
  }

  .minor-text {
    font-size: ${({ theme }) => theme.typography.size.md};
    color: ${({ theme }) => theme.color.text_disabled};
    text-align: center;
  }

  /* Elements */
  p {
    text-align: center;
  }
`;

export default SignInWrapper;

import styled from "styled-components";

// Styled components
export const Tone = styled.div`
  p {
    /* Default */
    cursor: pointer;
    padding: 0.5rem;
    background: none;
    border-radius: ${({ theme }) => theme.shape.border_radius};

    /* States */
    &.selected {
      background: ${({ theme }) => theme.color.primary.light};
      &:hover {
        background: ${({ theme }) => theme.color.primary.light};
      }
    }

    &:hover {
      background: ${({ theme }) => theme.color.primary.light};
    }
  }
`;

export const ChatForm = styled.form`
  /* Colors */
  background-color: ${({ theme }) => theme.color.primary.main};

  /* Effects */
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.25);

  /* Layer */
  z-index: ${({ theme }) => theme.z_index.chatbar};

  /* Size + Shape */
  padding: 0.2rem 1rem;
  box-sizing: border-box;
  height: 15vh;
  width: 100%;
  max-width: 728px;

  /* Display */
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Position
  position: fixed;
  bottom: 0; */

  /* Typography */
  font-size: 1.5rem;
`;

export const ToneButton = styled.div`
  /* Color */
  background-color: ${({ theme }) => theme.color.primary.light};

  /* Animation */
  transition: all 0.4s;

  /* Shape + Size */
  border-radius: 24px;
  width: 100%;
  height: 100%;
  max-height: 45px;
  max-width: 45px;
  border: none;

  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;

    content: "[tone]";

    color: white;
    margin-top: 5px;
    font-size: 14px;
    top: 40px;
  }
  &:hover {
    max-width: 60px;
    max-height: 60px;
  }

  &:active {
    background: white;
    border: none;
  }

  &:hover,
  &:active {
    &:after {
      position: absolute;
      content: "";
      color: white;
      font-size: 14px;
      top: 40px;
    }
  }
`;

export const SendButton = styled.button`
  /* Color */
  background: none;

  /* Animation */
  transition: all 0.4s;

  /* Shape + Size */
  border: none;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  max-height: 50px;
  max-width: 100;

  /* Spacing */
  margin: auto 5px;

  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;

  &:active {
    background: white;
  }

  &:hover {
    background: white;
  }

  &:disabled {
    &:hover {
      background: none;
    }
    img {
      opacity: 0.3;
    }
    cursor: not-allowed;
  }
`;

import styled from "styled-components/macro";
import ChatMessageProps from "../ChatMessage.interface";

const ChatMessageWrapper = styled.div<ChatMessageProps>`
  /* Base Message */
  .message {
    display: flex;
    align-items: center;
  }

  p {
    word-break: break-all;
  }

  /* Message Types */
  .sent p {
    align-self: flex-end;
    background: ${({ theme }) => theme.color.secondary.main};
    border-top-right-radius: 0px;
    color: ${({ theme }) => theme.color.text_primary};

    hr {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.text_primary};
    }
  }

  .received p {
    background: ${({ theme }) => theme.color.white};
    border-top-left-radius: 0px;
    color: ${({ theme }) => theme.color.text_secondary};

    hr {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.text_secondary};
    }
  }

  .sent {
    flex-direction: row-reverse;
  }

  /* Elements */
  p {
    margin-top: 100px;
  }
`;

export default ChatMessageWrapper;

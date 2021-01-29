import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Button from "../../Button";

export const ChatLinkWrapper = styled.div`
  background: #25272c;
  margin-bottom: 1rem;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ChatLinkText = styled(Link)`
  color: white;
  &:hover {
    color: gray;
  }
`;

export const ChatDeleteButton = styled(Button)`
  background: ${({ theme }) => theme.color.error.light};
`;

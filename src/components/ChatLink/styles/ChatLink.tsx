import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Button from "../../Button";
import ChatLinkProps from "../ChatLink.interface";

export const ChatLinkWrapper = styled(Link)<any>`
  margin-bottom: 1rem;
  padding: 10px;
  display: flex;

  & > * {
    flex-basis: 100%;
  }
  cursor: pointer;
  &:hover {
    background: #25272c;
  }
`;

export const ChatDeleteButton = styled(Button)`
  background: ${({ theme }) => theme.color.error.light};
`;

export const ChatTextWrapper = styled.div``;

export const ChatName = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  line-height: 15px;
  margin: 0;
  margin-bottom: 10px;
`;

export const RecentMessage = styled.p`
  && {
    margin: 0;
    padding: 0px;
    font-size: 15px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 90px;
  }
`;

export const MessageDate = styled.div`
  margin-left: 20px;
  && p {
    padding: 0;
    margin: 0;
    text-align: left;
    font-size: 13px;
    line-height: 15px;
  }
`;

export const MessageDay = styled.p``;
export const MessageHour = styled.p``;

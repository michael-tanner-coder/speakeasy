import styled from "styled-components";

export const RoomLink = styled.textarea`
  background: #e5e5e5;
  /* Shape + Size*/
  border: none;

  resize: none;
  color: #858181;

  width: 0px;
  opacity: 0;
`;

export const Input = styled.input`
  background: #e5e5e5;
  border-radius: 50px;
  border: none;
  padding: 1.2em 0.8em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 5px;
  }
`;

export const InviteHeader = styled.h2`
  font-weight: normal;
  font-size: 18px;
  color: white;
`;

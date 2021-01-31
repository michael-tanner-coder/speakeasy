import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

// Room Name
export const RoomNameInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-bottom: 20px;
  }
`;

export const RoomNameInput = styled.input`
  background: #e5e5e5;
  border-radius: 50px;
  border: none;
  padding: 1.2em 0.8em;
`;

export const RoomNameHeader = styled.h2`
  color: white;
  font-weight: normal;
  font-size: 18px;
`;

// RoomLink

export const RoomLinkHeader = styled.h2`
  color: white;
`;

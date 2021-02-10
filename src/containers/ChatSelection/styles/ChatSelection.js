import styled from "styled-components/macro";

export const Row = styled.div`
  display: flex;
  align-items: center;

  > *:nth-child(1) {
    flex: 1 1 80%;
  }
  > *:nth-child(2) {
    flex: 1 1 20%;
    button {
      margin-bottom: 25px;
    }
  }
`;

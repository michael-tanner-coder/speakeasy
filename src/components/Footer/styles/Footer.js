import styled from "styled-components/macro";

export const FooterWrapper = styled.div`
  background: ${({ theme }) => theme.color.primary.light};
  padding: 1rem 2rem;
  a {
    color: white;
    text-decoration: none;
    padding: 5px;
    margin: 0;

    &:hover {
      background: white;
      color: ${({ theme }) => theme.color.primary.light};
      border-radius: 8px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

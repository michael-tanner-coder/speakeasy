import styled from "styled-components";

export const DetailGrid = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  * {
    flex: 1 1 10em;
  }
`;

export const DetailWrapper = styled.div`
  max-width: 260px;
  margin: 0 auto;
  .background {
    background: ${({ theme }) => theme.color.primary.light};
    border-radius: 16px;
    height: 223px;
    width: 251px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    margin: 0 auto;
  }

  h3 {
    font-size: 36px;
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: 2px;
    margin: 0;
  }

  p {
    margin: 0;
  }

  margin-bottom: 2rem;
`;

import styled from "styled-components/macro";

const AppWrapper = styled.div`
  text-align: center;
  max-width: 728px;
  margin: 0 auto;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.color.background};
  }

  body {
    background-color: #282c34;
  }

  main {
    padding: 10px;
    height: 80vh;
    margin: 10vh 0 0vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }

  main::-webkit-scrollbar {
    width: 0.25rem;
  }

  main::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.secondary.main};
  }

  form button {
    width: 20%;
  }

  ul,
  li {
    text-align: left;
    list-style: none;
  }

  p {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: gray;
    }
  }

  input {
    /* Shape + Size*/
    border: none;
    border-radius: ${({ theme }) => theme.shape.border_radius};
    padding: 0.6rem 1rem;
  }

  .error-text {
    color: ${({ theme }) => theme.color.error.light};
  }

  .success-text {
    color: ${({ theme }) => theme.color.success.light};
  }
`;
export default AppWrapper;

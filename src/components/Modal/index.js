import styled from "styled-components/macro";
import ReactModal from "react-modal";

const Modal = styled(ReactModal)`
  border-radius: 32px;
  max-width: 280px;
  background: ${({ theme }) => theme.color.background};
  outline: none;
  margin: 0 auto;
  margin-top: 40vh;
  padding: 2rem;
  color: white;
  h2 {
    margin: 0;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
`;

export default Modal;

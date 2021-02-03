import styled from "styled-components";

export const ContactPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1475px;
`;
export const Section = styled.section`
  margin: 20vh 0;
`;
export const Container = styled.div`
  padding: 2rem;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;

  @media (max-width: 735px) {
    grid-template-columns: auto;
  }
`;
export const Col = styled.div`
  margin: 0.2rem;
  display: flex;
  flex-direction: column;
`;
export const ContactHeader = styled.h1`
  font-weight: bold;
  font-size: 95px;
  margin: 10px 0px;
  line-height: 100px;

  @media (max-width: 735px) {
    font-size: 55px;
    line-height: 60px;
  }
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  input,
  textarea {
    margin-bottom: 15px;
    border-radius: 4px;
  }
  h2 {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const Textarea = styled.textarea`
  resize: none;
  height: 12ch;
  padding: 0.6rem 1rem;
  font-family: ${({ theme }) => theme.typography.fonts.primary};
`;

import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const ContactPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1475px;
`;
const Section = styled.section`
  margin: 20vh 0;
`;
const Container = styled.div`
  padding: 2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;

  @media (max-width: 735px) {
    grid-template-columns: auto;
  }
`;
const Col = styled.div`
  margin: 0.2rem;
  display: flex;
  flex-direction: column;
`;
const ContactHeader = styled.h1`
  font-weight: bold;
  font-size: 95px;
  margin: 10px 0px;
  line-height: 100px;

  @media (max-width: 735px) {
    font-size: 55px;
    line-height: 60px;
  }
`;
const ContactForm = styled.form`
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
const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;
const Textarea = styled.textarea`
  resize: none;
  height: 12ch;
  padding: 0.6rem 1rem;
`;

const Contact = () => {
  return (
    <ContactPageWrapper>
      <body>
        <Section>
          <Container>
            <Grid>
              <Col>
                <ContactHeader id="w-node-Heading-25fe052f">
                  Tell us what you think about speakEasy
                </ContactHeader>
              </Col>
              <Col>
                <ContactForm
                  id="email-htmlForm"
                  name="email-htmlForm"
                  data-name="Email htmlForm"
                >
                  <h2 id="w-node-Heading 2-25fe052f">Contact Us</h2>

                  {/* Name */}
                  <Label htmlFor="name">Name</Label>
                  <input
                    type="text"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="Name ..."
                    id="name"
                  />

                  {/* Email */}
                  <Label htmlFor="email-2">Email Address</Label>
                  <input
                    type="email"
                    maxLength={256}
                    name="email"
                    data-name="Email"
                    placeholder="Email ..."
                    id="email"
                    required={false}
                  />

                  {/* Message */}
                  <Label htmlFor="email">Message</Label>
                  <Textarea
                    placeholder="Type your message here ..."
                    maxLength={5000}
                    id="field"
                    name="field"
                    required={false}
                  ></Textarea>

                  {/* Submit */}
                  <Button
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                  >
                    Send
                  </Button>
                </ContactForm>
                {/* <div className="w-htmlForm-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-htmlForm-fail">
                  <div>
                    Oops! Something went wrong while submitting the htmlForm.
                  </div>
                </div> */}
              </Col>
            </Grid>
          </Container>
        </Section>
      </body>
    </ContactPageWrapper>
  );
};

export default Contact;

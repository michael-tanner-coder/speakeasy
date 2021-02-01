import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const ContactPageWrapper = styled.div``;
const Section = styled.section``;
const Container = styled.div``;
const Grid = styled.div``;
const Col = styled.div``;
const Row = styled.div``;
const ContactHeader = styled.h1``;
const ContactForm = styled.form``;
const Label = styled.label``;
const Textarea = styled.textarea``;

const Contact = () => {
  return (
    <ContactPageWrapper>
      <body className="body-2">
        <Section>
          <Container>
            <Grid className="w-layout-grid grid">
              <Col>
                <ContactHeader
                  id="w-node-Heading-25fe052f"
                  className="heading-7"
                >
                  Tell us what you think about speakEasy
                </ContactHeader>
              </Col>
              <Col>
                <h1 id="w-node-Heading 2-25fe052f" className="heading-8">
                  Contact Us
                </h1>
                <Row id="w-node-af3780859513-25fe052f" className="w-htmlForm">
                  <ContactForm
                    id="email-htmlForm"
                    name="email-htmlForm"
                    data-name="Email htmlForm"
                  >
                    <Label htmlFor="name" className="field-Label">
                      Name
                    </Label>
                    <input
                      type="text"
                      className="text-field-2 w-Input"
                      maxLength={256}
                      name="name"
                      data-name="Name"
                      placeholder=""
                      id="name"
                    />
                    <Label htmlFor="email-2" className="field-Label-2">
                      Email Address
                    </Label>
                    <input
                      type="email"
                      className="text-field w-Input"
                      maxLength={256}
                      name="email"
                      data-name="Email"
                      placeholder=""
                      id="email"
                      required={false}
                    />
                    <Label htmlFor="email" className="field-Label-2">
                      Message
                    </Label>
                    <Textarea
                      placeholder="Example Text"
                      maxLength={5000}
                      id="field"
                      name="field"
                      required={false}
                      className="Textarea w-Input"
                    ></Textarea>
                    <Button
                      type="submit"
                      value="Submit"
                      data-wait="Please wait..."
                      className="button w-button"
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
                </Row>
              </Col>
            </Grid>
          </Container>
        </Section>
      </body>
    </ContactPageWrapper>
  );
};

export default Contact;

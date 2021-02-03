import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { init, send } from "emailjs-com";
import { hasKey } from "../../util/hasKey";
import {
  ContactPageWrapper,
  Section,
  Container,
  Grid,
  Col,
  ContactHeader,
  ContactForm,
  Label,
  Textarea,
} from "./styles/ContactFormSection";

// Initial process to send over emailJS
init(process.env.REACT_APP_EMAILJS_USER_ID as string);

// Main component
const ContactFormSection = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const sendEmail = () => {
    send("default_service", "template_cgrkq3g", {
      from_name: formState.name,
      from_email: formState.email,
      reply_to: formState.email,
      message: formState.message,
    })
      .then((res) => {
        if (res.status === 200) {
          setSuccess("Thank you! Your submission has been received!");
        }
      })
      .catch((err) => {
        setError("So sorry! There was a problem submitting your message.");
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    var valid = true;

    for (var prop in formState) {
      if (hasKey(formState, prop) && !formState[prop]) {
        setError("Error: missing " + prop);
        valid = false;
      }
    }

    if (valid) {
      setSuccess("Sending ...");
      setError("");
      sendEmail();
    }
  };

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
                    onChange={({ target }) =>
                      setFormState((prevState) => {
                        return { ...prevState, name: target.value };
                      })
                    }
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
                    onChange={({ target }) =>
                      setFormState((prevState) => {
                        return { ...prevState, email: target.value };
                      })
                    }
                  />

                  {/* Message */}
                  <Label htmlFor="email">Message</Label>
                  <Textarea
                    placeholder="Type your message here ..."
                    maxLength={5000}
                    id="field"
                    name="field"
                    required={false}
                    onChange={({ target }) =>
                      setFormState((prevState) => {
                        return { ...prevState, message: target.value };
                      })
                    }
                  ></Textarea>

                  {/* Submit */}
                  <Button
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    onClick={(e) => handleSubmit(e)}
                  >
                    Send
                  </Button>
                </ContactForm>
                <div className="success-text">
                  <div>{success}</div>
                </div>
                <div className="error-text">
                  <div>{error}</div>
                </div>
              </Col>
            </Grid>
          </Container>
        </Section>
      </body>
    </ContactPageWrapper>
  );
};

export default ContactFormSection;

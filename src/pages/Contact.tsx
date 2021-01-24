import React from "react";

const Contact = () => {
  return (
    <>
      <body className="body-2">
        <div className="section-2">
          <div className="w-container">
            <div className="w-layout-grid grid">
              <h1 id="w-node-Heading-25fe052f" className="heading-7">
                Tell us what you think about speakEasy
              </h1>
              <h1 id="w-node-Heading 2-25fe052f" className="heading-8">
                Contact Us
              </h1>
              <div id="w-node-af3780859513-25fe052f" className="w-htmlForm">
                <form
                  id="email-htmlForm"
                  name="email-htmlForm"
                  data-name="Email htmlForm"
                >
                  <label htmlFor="name" className="field-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="text-field-2 w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder=""
                    id="name"
                  />
                  <label htmlFor="email-2" className="field-label-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="text-field w-input"
                    maxLength={256}
                    name="email"
                    data-name="Email"
                    placeholder=""
                    id="email"
                    required={false}
                  />
                  <label htmlFor="email" className="field-label-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Example Text"
                    maxLength={5000}
                    id="field"
                    name="field"
                    required={false}
                    className="textarea w-input"
                  ></textarea>
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    className="button w-button"
                  />
                </form>
                <div className="w-htmlForm-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-htmlForm-fail">
                  <div>
                    Oops! Something went wrong while submitting the htmlForm.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Contact;

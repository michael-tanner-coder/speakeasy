import React, { useRef, useState } from "react";
import { init, send } from "emailjs-com";

// Components
import Button from "../Button";
import {
  Wrapper,
  RoomLink,
  Input,
  Row,
  InviteHeader,
} from "./styles/RoomLinkSender";

// State + Data
import { auth } from "../../firebase/config";

// Initial process to send over emailJS
init(process.env.REACT_APP_EMAILJS_USER_ID as string);

interface RoomLinkSenderProps {
  link: string;
}
const RoomLinkSender: React.FC<RoomLinkSenderProps> = ({ link }) => {
  // Hooks
  const textRef = useRef<HTMLTextAreaElement>(
    document.createElement("textarea")
  );
  const [email, setEmail] = useState("");

  // Functions
  const copyText = () => {
    console.log("copying");
    textRef.current.select();
    document.execCommand("copy");
    console.log("copied");
  };

  const sendEmail = () => {
    if (auth.currentUser) {
      // send the message and get a callback with an error or details of the message that was sent
      send("default_service", "template_ocqsdjy", {
        from_name: auth.currentUser.email,
        to_name: email,
        invite_link: link,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log("Email sent");
          }
        })
        // Handle errors here however you like
        .catch((err) => console.error("Failed to send feedback. Error: ", err));
    }
  };

  // Render
  return (
    <Wrapper>
      <Row>
        <RoomLink ref={textRef} value={link} />
        <Input
          type="email"
          placeholder="Email ..."
          value={link}
          onChange={({ target }) => setEmail(target.value)}
        />

        <div>
          <Button onClick={() => copyText()}>Copy</Button>
        </div>
      </Row>
      <br />
      <InviteHeader>Invite a friend to chat!</InviteHeader>
      <Row>
        <Input
          type="email"
          placeholder="Email ..."
          onChange={({ target }) => setEmail(target.value)}
        />
        <div>
          <Button disabled={email ? false : true} onClick={() => sendEmail()}>
            Send
          </Button>
        </div>
      </Row>
    </Wrapper>
  );
};

export default RoomLinkSender;

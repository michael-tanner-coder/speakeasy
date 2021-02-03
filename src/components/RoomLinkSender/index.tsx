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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Functions
  const copyText = () => {
    console.log("copying");
    textRef.current.select();
    document.execCommand("copy");
    console.log("copied");
  };

  const sendEmail = () => {
    if (auth.currentUser) {
      send("default_service", "template_ocqsdjy", {
        from_name: auth.currentUser.email,
        to_name: email,
        invite_link: link,
      })
        .then((res) => {
          if (res.status === 200) {
            setSuccess("Invite sent!");
          }
        })
        .catch(() => {
          setError("Please enter a valid email address");
        });
    }
  };

  // Render
  return (
    <Wrapper>
      <Row>
        <RoomLink
          ref={textRef}
          value={"https://speakeasyapp.netlify.app/chat?room=" + link}
        />
        <Input type="text" value={link} />

        <div>
          <Button onClick={() => copyText()}>Copy</Button>
        </div>
      </Row>
      <br />
      <InviteHeader>Invite a friend to chat!</InviteHeader>
      {error && <p className="error-text">{error}</p>}
      <Row>
        <Input
          type="email"
          placeholder="Email ..."
          onChange={({ target }) => {
            setEmail(target.value);
            setError("");
          }}
        />
        <div>
          <Button disabled={email ? false : true} onClick={() => sendEmail()}>
            Send
          </Button>
        </div>
      </Row>
      {success && <p className="success-text">{success}</p>}
    </Wrapper>
  );
};

export default RoomLinkSender;

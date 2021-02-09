import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ChatMessage from "./index";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

const mockMessage = {
  id: "msg_id",
  createdAt: new Date(),
  photoURL: "",
  text: "Test message",
  uid: "msg_uid",
};

const mockMessageWithTone = {
  id: "msg_id",
  createdAt: new Date(),
  photoURL: "",
  text: "Test message",
  uid: "msg_uid",
  tone: "SERIOUS",
};

test("ChatMessage matches snapshot", () => {});

test("ChatMessage renders attributes of a message", () => {
  // renders text of message
  // renders profile image of sender
});

test("ChatMessage renders attributes of a message with a tone", () => {
  // renders text of message
  // renders profile image of sender
  // renders tone of message
});

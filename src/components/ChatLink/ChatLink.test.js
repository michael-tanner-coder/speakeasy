import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ChatLink from "./index";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

const mockMessage = {
  id: "msg_id",
  createdAt: new Date(),
  photoURL: "",
  text: "Test message",
  uid: "msg_uid",
};

test("ChatLink matches snapshot", () => {});

test("ChatLink renders skeleton data", () => {});

test("ChatLink renders attributes of a mock message", () => {
  // renders profile image
  // renders chat room name
  // renders clipped text of most recent message in chat room
  // renders timestamp (abbreviated day, followed by the hour) of most recent message
});

test("ChatLink renders when there are no messages in its chat room", () => {
  // renders profile image
  // renders chat room name
  // Does not render a preview for a recent message
  // renders "No messages" text instead of a timestamp
});

test("ChatLink takes user to the correct chat room", () => {});

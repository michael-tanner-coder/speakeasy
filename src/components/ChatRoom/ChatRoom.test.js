import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ChatRoom from "./index";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

const mockRoute = "chat?=testroom";
const mockMessages = [
  {
    id: "msg_id",
    createdAt: new Date(),
    photoURL: "",
    text: "Test message",
    uid: "msg_uid",
  },
  {
    id: "msg_id",
    createdAt: new Date(),
    photoURL: "",
    text: "Test message with tone",
    uid: "msg_uid",
    tone: "SERIOUS",
  },
];

test("ChatRoom matches snapshot", () => {});

test("ChatRoom renders messages associated with a given route", () => {});

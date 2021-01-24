// Main dependencies
import React, { useState } from "react";

// Authentication
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";

// Components
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";
import Header from "./components/Header";

// Styles
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import AppWrapper from "./AppWrapper";
import PageWrapper from "./PageWrapper";

// Pages
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";

// TODO: Implement Chat room invite
// TODO: Implement Form behavior
// TODO: Implement state management
// TODO: Replace navbar
// TODO: Build component stories
// TODO: Write component tests

function App() {
  const [user] = useAuthState(auth);
  const [page, setPage] = useState("landing");

  return (
    <ThemeProvider theme={theme}>
      {(page === "app" && (
        <AppWrapper className="App">
          <Header>
            <h1>speakEASY</h1>
            <SignOut />
          </Header>
          <section>{user ? <ChatRoom /> : <SignIn />}</section>
        </AppWrapper>
      )) || (
        <PageWrapper setPage={setPage}>
          {page === "landing" && <Landing setPage={setPage} />}

          {page === "contact" && <Contact />}
        </PageWrapper>
      )}
    </ThemeProvider>
  );
}

export default App;

// Main dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Authentication
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";

// Components
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";
import Header from "./components/Header";
import CreateRoomButton from "./components/CreateRoomButton";

// Containers
import ChatSelection from "./containers/ChatSelection";

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
// TODO: Build component stories
// TODO: Write component tests

function App() {
  const [user] = useAuthState(auth);
  const [page, setPage] = useState("landing");

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/app">
            <AppWrapper className="App">
              <Header>
                <h1>speakEASY</h1>
                <SignOut />
              </Header>
              <section>
                {user ? (
                  <>
                    <h2>Create a chat</h2>
                    <CreateRoomButton />
                    <ChatSelection />
                  </>
                ) : (
                  <SignIn />
                )}
              </section>
            </AppWrapper>
          </Route>
          <Route path="/contact">
            <PageWrapper setPage={setPage}>
              <Contact />
            </PageWrapper>
          </Route>
          <Route path="/chat">
            <AppWrapper className="App">
              <Header>
                <h1>speakEASY</h1>
                <SignOut />
              </Header>
              <section>{user ? <ChatRoom /> : <SignIn />}</section>
            </AppWrapper>
          </Route>
          <Route path="/">
            <PageWrapper setPage={setPage}>
              <Landing setPage={setPage} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

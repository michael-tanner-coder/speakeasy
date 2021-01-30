// Main dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";

// Authentication
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";

// Components
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";
import Header from "./components/Header";
import RoomCreator from "./components/RoomCreator";
import UserFetch from "./UserFetch";
import ChatRoomFetch from "./ChatRoomFetch";

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

// TODO: Implement state management
// TODO: Implement Form behavior
// TODO: Build component stories
// TODO: Write component tests

function App() {
  const [user] = useAuthState(auth);
  const [page, setPage] = useState("landing");

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <UserFetch />
        <ChatRoomFetch />
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
                      <RoomCreator />
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
    </RecoilRoot>
  );
}

export default App;

// Main dependencies
import React from "react";
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

// Icons
import Arrow from "./images/Arrow.svg";

// Pages
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";

// TODO: Implement state management
// TODO: Implement Form behavior
// TODO: Build component stories
// TODO: Write component tests

function App() {
  const [user] = useAuthState(auth);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <UserFetch />
        <ChatRoomFetch />
        <Router>
          <Switch>
            {/* Sign on */}
            <Route path="/app">
              <AppWrapper className="App">
                <Header>
                  <Link to="/">
                    <h1>speakEASY</h1>
                  </Link>
                  <SignOut />
                </Header>
                <section>
                  {user ? (
                    <>
                      <RoomCreator />
                      <ChatSelection />
                    </>
                  ) : (
                    <SignIn />
                  )}
                </section>
              </AppWrapper>
            </Route>

            {/* Contact form */}
            <Route path="/contact">
              <PageWrapper>
                <Contact />
              </PageWrapper>
            </Route>

            {/* Chat room */}
            <Route path="/chat">
              <AppWrapper className="App">
                <Header>
                  <Link to="/app">
                    <img src={Arrow} />
                  </Link>
                  <SignOut />
                </Header>
                <section>{user ? <ChatRoom /> : <SignIn />}</section>
              </AppWrapper>
            </Route>

            {/* Landing page */}
            <Route path="/">
              <PageWrapper>
                <Landing />
              </PageWrapper>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;

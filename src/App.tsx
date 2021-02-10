// Main dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";

// Authentication
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";

// Components
import SignOutButton from "./components/SignOutButton";
import Header from "./components/Header";
import RoomCreator from "./components/RoomCreator";

// Data fetchers
import UserFetch from "./fetchers/UserFetch";
import ChatRoomFetch from "./fetchers/ChatRoomFetch";

// Containers
import ChatSelection from "./containers/ChatSelection";
import ChatRoom from "./containers/ChatRoom";
import SignInSection from "./containers/SignInSection";

// Styles
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import AppWrapper from "./wrappers/AppWrapper";
import PageWrapper from "./wrappers/PageWrapper";

// Icons
import Arrow from "./images/Arrow.svg";

// Pages
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";

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
                  <SignOutButton />
                </Header>
                <section>
                  {user ? (
                    <>
                      <RoomCreator />
                      <ChatSelection />
                    </>
                  ) : (
                    <SignInSection />
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
                  <SignOutButton />
                </Header>
                <section>{user ? <ChatRoom /> : <SignInSection />}</section>
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

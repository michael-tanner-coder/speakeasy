// Layout component for the sign in process

import React from "react";
import { firebase, auth } from "../../firebase/config";
import SignInWrapper from "./styles/SignIn";
import Button from "../Button";
import signInWithGoogle from "../../util/signInWithGoogle";

const SignIn = () => {
  return (
    <SignInWrapper>
      <h2>Welcome to speakEasy</h2>
      <h3>A chat app for maximum clarity*</h3>
      <Button
        className="sign-in"
        onChange={() => console.log("change")}
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </Button>
      <p>To learn more about the speakEasy project, visit our landing page.</p>
      <p className="minor-text">
        *This is app is only a proof of concept and not intended for commercial
        use.
      </p>
    </SignInWrapper>
  );
};

export default SignIn;

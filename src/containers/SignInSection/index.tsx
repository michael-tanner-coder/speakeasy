// Layout component for the sign in process

import React from "react";
import SignInWrapper from "./styles/SignIn";
import Button from "../../components/Button";
import signInWithGoogle from "../../util/signInWithGoogle";
import { Link } from "react-router-dom";

const SignInSection = () => {
  return (
    <SignInWrapper>
      <h2>Welcome to speakEasy!</h2>
      <h3>The chat app for maximum clarity*</h3>
      <Button
        className="sign-in"
        onChange={() => console.log("change")}
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </Button>
      <p>
        To learn more about the speakEasy project, visit the{" "}
        <Link to="/" style={{ color: "#0078AE" }}>
          landing page
        </Link>
      </p>
      <p className="minor-text">
        *This is app is only a proof of concept and not intended as a commercial
        product.
      </p>
    </SignInWrapper>
  );
};

export default SignInSection;

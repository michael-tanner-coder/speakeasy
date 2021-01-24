// Button component for signing out of the app

import React from "react";
import { auth } from "../../firebase/config";
import Button from "../Button";

const SignOut = () => {
  return (
    auth.currentUser && (
      <Button
        variant="primary"
        shade="light"
        className="sign-out"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    )
  );
};

export default SignOut;

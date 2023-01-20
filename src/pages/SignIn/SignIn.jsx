// vendors
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin-container">
      <TextField
        id="standard-basic"
        label="Username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        variant="standard"
      />
      <TextField
        id="standard-basic"
        label="Password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        variant="standard"
      />
      <Button>Sign In</Button>
    </div>
  );
};

export default SignIn;

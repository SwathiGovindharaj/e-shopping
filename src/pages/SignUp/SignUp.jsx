// vendors
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

// utils
import routerLinks from "../../data/routerLinks";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="signup-container">
      <TextField
        id="standard-basic"
        label="Username"
        name="username"
        value={formData.username}
        onChange={(e) => handleChange(e)}
        variant="standard"
      />
      <TextField
        id="standard-basic"
        label="Password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChange(e)}
        variant="standard"
      />
      <Button>Sign Up</Button>
      <Typography>
        Already have an account ?{" "}
        <Button onClick={() => navigate(routerLinks.SIGN_IN)}>Sign In</Button>
      </Typography>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import styled from "styled-components";

const Login = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (userName && password.trim) {
      dispatch(login(userName, password));
    }
  };

  return (
    <Main>
      <Form>
        <h1>Get Started</h1>
        <Label>
            Name
        <Input
          value={userName}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
        />
        </Label>
        <Label>
            Password
        <Input
          value={password}
          type="text"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        </Label>
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </Main>
  );
};

export default Login;

const Main = styled.form `
display: flex;
align-items: center;
justify-content: center;
`

const Form = styled.form`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
height: 400px;
width: 400px;
`

const Button = styled.button`
    width: 100%;
    height: 30px;
    background-color: #3A5B22;
    border-radius: 10px;
    color: white;
    font-weight: bold;
`

const Label =styled.label `
display: flex;
flex-direction: column;
font-weight: 500;
width: 100%;
`

const Input = styled.input`
border-radius: 10px;
height: 30px;
border-color: #D9D9D9;
`
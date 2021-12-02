import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import { loginDetails } from "../thunk/Login";
import { login } from '../action'
import { useHistory } from "react-router";

function LoginForm() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.Login.data)
  const history = useHistory();
  const { email, password } = loginData;
  const handleChange = (e) => {

    dispatch(login({ ...loginData, [e.target.name]: e.target.value }));
  }
  const submit = (e) => {
    e.preventDefault();
    dispatch(loginDetails(loginData))
    history.push("/Dashboard")

  }

  return (
    <> <Form onSubmit={submit}>
      <div className="text-center">
        <h1 className="text-center">Login Form </h1>
        Email:
        <input type="text" name="email" value={email} onChange={handleChange} /><br /><br />
        Password:
        <input type="password" name="password" value={password} onChange={handleChange} /><br /><br />
        <Button type="submit">submit</Button>
      </div>
    </Form>

    </>
  );
}

export default LoginForm;
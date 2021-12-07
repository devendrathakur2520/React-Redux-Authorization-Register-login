import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import { LoginDetails } from "../thunk/Login";
import { logDeatails, login } from '../action'
import { useHistory } from "react-router";

function LoginForm() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.Login.data)
  const ResponseStatus = useSelector((state) => state.Login.status)
  const history = useHistory();
  const { email, password } = loginData;
  const handleChange = (e) => {

    dispatch(login({ ...loginData, [e.target.name]: e.target.value }));
  }
  const submit = (e) => {
    e.preventDefault();
    dispatch(LoginDetails(loginData))

    setTimeout(function () {
      if (ResponseStatus === 200) {
        history.push("/Dashboard")
      }
      else {
        alert("incorrect password ")
      }
    }, 2000)
  }

  return (
    <> <Form onSubmit={submit}>
      <div className="text-center">
        <h1 className="text-center">Login Form </h1>
        Email:
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="Enter Email" required /><br /><br />
        Password:
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Enter Password" required /><br /><br />
        <Button type="submit">LogIn</Button>
      </div>
    </Form>

    </>
  );
}

export default LoginForm;
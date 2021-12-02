import React from "react";
import { logDeatails, setLogDeatails } from "../action";
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import { submitDetails } from "../thunk/ResistrationDeatails";
import { useHistory } from "react-router";


function RegistrationForm() {

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.logData.data)

  const history = useHistory();
  const { email, password } = userData;
  const handleChange = (e) => {

    dispatch(logDeatails({ ...userData, [e.target.name]: e.target.value }));
  }
  const submit = (e) => {
    e.preventDefault();
    dispatch(submitDetails(userData));
    history.push("/LoginForm")

  }

  return (
    <><Form onSubmit={submit}>
      <div className="text-center">
        <h1 className="text-center"> Registration Form </h1>
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

export default RegistrationForm;

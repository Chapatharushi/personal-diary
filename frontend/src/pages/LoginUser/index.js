/** @format */
import React, { useState } from "react";
import axios from "axios";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { Button} from '@material-ui/core';

function LoginUser() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const res = await axios({
        method: "post",
        baseURL: "http://localhost:3333",
        url: "/api/v1/user/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Login Users</h3>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            name="username"
            required
            className="form-control"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label>Password :</label>
          <input
            type="text"
            name="password"
            required
            className="form-control"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Login"
            className="btn btn-primary"
          />
          {/* &nbsp; &nbsp; &nbsp;
          <input type="submit" value="Create Account" className="btn btn-primary"  /> */}
        </div>
        {/* <div className="form-group">
        <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == ''}
            onClick={this.login}
          >
            Login
          </Button>
          </div> */}
        {/* <a href="/">
            Login
          </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/create">
            Create
          </a> */}
      </form>
    </div>
  );
}

export default LoginUser;

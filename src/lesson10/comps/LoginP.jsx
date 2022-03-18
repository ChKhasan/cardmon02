import React, { useState, useContext } from "react";
import { Context } from "..";
import { toast } from "react-toastify";

const LoginP = () => {
  const { token, setToken } = useContext(Context);

  const [data, setArr] = useState([]);
  const [obj, setObj] = useState({ name: "", number: "" });

  const handleInput1 = (e) => {
    obj.name = e.target.value;
    setArr([obj]);
  };
  const handleInput2 = (e) => {
    obj.number = e.target.value;
    setArr([obj]);
  };
  const signup = () => {
    document.querySelector("#none").style.display = "none";
    document.querySelector("#block").style.display = "flex";
  };
  const click = () => {
    if (
      document.querySelector("#name").value &&
      document.querySelector("#number").value
    ) {
      if (localStorage.getItem("data")) {
        if (localStorage.getItem("data").length != 0) {
          console.log(JSON.parse(localStorage.getItem("data")));

          let a = [...JSON.parse(localStorage.getItem("data")), ...data];

          localStorage.setItem("data", JSON.stringify(a));
        } else {
          localStorage.setItem("data", JSON.stringify(data));
        }
      } else {
        localStorage.setItem("data", JSON.stringify(data));
      }

      document.querySelector("#none").style.display = "flex";
      document.querySelector("#block").style.display = "none";
    } else {
      toast.error("Please fill in this form");
    }
  };

  const testData = () => {
    if (
      JSON.parse(localStorage.getItem("data")).filter(
        (item) => item.name === document.getElementById("testName").value
      ).length > 0 &&
      document.querySelector("#testNumber").value
    ) {
      setToken(true);
      localStorage.setItem("TOKEN", "token");
      window.location.href = "/";
      toast.success("WELCOME !!! ") ;
    } else {
      setToken(false);
      toast.error("Please fill in this form");
    }
  };

  return (
    <>

      <div id="block" className="signup  flex-column align-items-center">
   <div className="row"><div className="col-12 d-flex justify-content-center"><h1>Sign Up</h1></div></div>
        
        <div className="form-group d-flex flex-column align-items-center">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Login
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={handleInput1}
              className="form-control"
              id="name"
              placeholder="Enter email"
            />
          </div>
        </div>
        
        <div className="form-group  d-flex flex-column align-items-center ">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              onChange={handleInput2}
              className="form-control"
              id="number"
              placeholder="Password"
            />
          </div>
        </div>
        <button
          style={{ width: "100px" }}
          className="btn btn-success mt-3"
          onClick={click}
        >
          Save
        </button>
      </div>

      <br />
      <div id="none" className="signin flex-column align-items-center">
   <div className="row"><div className="col-12 d-flex justify-content-center"><h1>Sign In</h1></div></div>
        <div className="form-group d-flex flex-column align-items-center">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Login
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="testName"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="form-group d-flex flex-column align-items-center">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="testNumber"
              placeholder="Password"
            />
          </div>
        </div>
        <a href="#" className="mt-2" onClick={signup}>
          Sign Up
        </a>
        <button className="btn btn-success mt-2" onClick={testData}>
          Send
        </button>
      </div>
    </>
  );
};

export default LoginP;

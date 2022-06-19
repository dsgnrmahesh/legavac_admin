import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import { getLoginDetail } from "../config/api";
export default function SignIn() {
  const [valid, setValid] = useState({
    UserName: "",
    Password: "",
  });
  const [state, setState] = useState({
    UserName: "",
    Password: "",
  });
  const [error, setError] = useState({
    UserName: "",
    Password: "",
  });

  const [pwdType, setpwdType] = useState("Password");
  const emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  const pwdPattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  const handleChange = (e) => {
    if (e.target.name === "UserName") {
      if (!emailPattern.test(e.target.value)) {
        setValid({ ...valid, UserName: false });
        setError({ ...error, UserName: "Please enter valid email address." });
      } else {
        setValid({ ...valid, UserName: true });
        setError({ ...error, UserName: "" });
      }
      setState({ ...state, UserName: e.target.value });
    }
    if (e.target.name === "Password") {
      if (!pwdPattern.test(e.target.value)) {
        setValid({ ...valid, Password: false });
        setError({
          ...error,
          Password:
            "Password mustbe 8 charaters. atlest 1 Number, 1 Capitale Letter, 1 Symbol",
        });
      } else {
        setValid({ ...valid, Password: true });
        setError({ ...error, Password: "" });
      }
      setState({ ...state, Password: e.target.value });
    }
  };
  async function handleButtonClick(e) {
    e.preventDefault();
    if (!valid.Password && !valid.UserName) {
      setValid({ UserName: false, Password: false });
      setError({
        UserName: "Please enter valid email address.",
        Password: "Please enter Password",
      });
      return false;
    }
    if (!valid.Password) {
      setValid({ ...valid, Password: false });
      setError({
        ...error,
        Password: "Please enter Password",
      });
    }
    if (!valid.UserName) {
      setValid({ ...valid, UserName: false });
      setError({ ...error, UserName: "Please enter valid email address." });
    }
    if (valid.UserName && valid.Password) {
      await getLoginDetail(state)
        .then((response) => {
          // alert(response[0][0].AdminID);
          if (response[0].length > 0) {
            sessionStorage.setItem("RoleID", response[0][0].RoleID);
            sessionStorage.setItem("Role", response[0][0].Role);
            sessionStorage.setItem("UserID", response[0][0].AdminID);
            sessionStorage.setItem("ZoneID", response[0][0].ZoneID);
            sessionStorage.setItem("FullName", response[0][0].FullName);
            window.location.href = "/dashboard";
          } else {
            alert("User Not Found");
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  return (
    <>
      <div className="auth-box-page">
        <div className="auth-box-left">
          <div className="auth-box">
            <div className="d-block pb-4">
              <img
                src="https://abhitalandsolutions.com/wp-content/uploads/2021/06/logo.png"
                alt="abhita land solutions"
              />
            </div>
            <div className="d-block">
              <span className="welcome-text d-block">Welcome to</span>
              <span className="wlcm-company-name d-block">
                abhita land solutions
              </span>
            </div>
            <div className="auth-box-form">
              <div className="w-100">
                <div
                  className={
                    valid.UserName === true || valid.UserName === ""
                      ? "form-group"
                      : "form-group feild-invalid"
                  }
                >
                  <label className="control-label">Email Address</label>
                  <input
                    type="text"
                    name="UserName"
                    placeholder="Enter Email ID"
                    className="form-control"
                    onChange={handleChange}
                    value={state.UserName}
                  />
                  {valid.UserName === false ? (
                    <div className="feild-feedback">{error.UserName}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="w-100">
                <div
                  className={
                    valid.Password === true || valid.Password === ""
                      ? "form-group"
                      : "form-group feild-invalid"
                  }
                >
                  <label className="control-label">Password</label>
                  <div className="control-pwd">
                    <input
                      type={pwdType}
                      name="Password"
                      placeholder="Enter Password"
                      className="form-control"
                      onChange={handleChange}
                      value={state.Password}
                    />
                    {pwdType === "Password" ? (
                      <Icon
                        path={mdiEye}
                        onClick={() => {
                          setpwdType("text");
                        }}
                      />
                    ) : (
                      <Icon
                        path={mdiEyeOff}
                        onClick={() => {
                          setpwdType("Password");
                        }}
                      />
                    )}
                  </div>
                  {valid.Password === false ? (
                    <div className="feild-feedback">{error.Password}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="w-100">
                <div className="form-group">
                  <button
                    className="btn btn-indigo d-block w-100"
                    onClick={handleButtonClick}
                  >
                    sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="auth-box-right"
          style={{ backgroundImage: "url(/images/login-bg.jpg)" }}
        ></div>
      </div>
    </>
  );
}

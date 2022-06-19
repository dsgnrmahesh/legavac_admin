import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import { Card, Container, Row, Col } from "react-bootstrap";
import { getAdminLoginDetail } from "../config/api";
export default function Login() {
  const [state, setstate] = useState({
    EmailID: "",
    Password: "",
  });
  const [pwdType, setpwdType] = useState("Password");
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  useEffect(() => { }, []);
  async function handleClick(e) {
    e.preventDefault();

    await getAdminLoginDetail(state).then(response => {
      if (response[0].length > 0) {
        sessionStorage.setItem("UserID", response[0][0].UserID);
        sessionStorage.setItem("Name", response[0][0].Name);
        sessionStorage.setItem("EmailID", response[0][0].EmailID);
        window.location.href = "/dashboard";
      }
      else {
        alert("EmailID not found \nPlease contact to admin");
      }
    }).catch((error) => {
      alert(error);
    });
    // if (
    //   state.EmailID === "admin@gmail.com" &&
    //   state.Password === "admin@123"
    // ) {
    //   window.location.href = "/dashboard";
    // } else {
    //   alert("EmailID not found \nPlease contact to admin");
    // }
  };
  return (
    <>
      <section
        className="app__section form-section py-5"
        style={{ background: "#f7f7f7", minHeight: "calc(100vh - 35px)" }}
      >
        <Container>
          <Row className="justify-content-center mt-5">
            <Col sm={12} md={7} lg={5}>
              <Card>
                <Card.Body className="px-4 py-4">
                  <Card.Title className="mb-4">Sign In</Card.Title>
                  <form autoComplete="off" className="login-form">
                    <div className="w-100">
                      <div className="form-group">
                        <label className="control-label">Email Address</label>
                        <input
                          type="text"
                          name="EmailID"
                          placeholder="Enter Email ID"
                          className="form-control"
                          value={state.EmailID}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="form-group">
                        <label className="control-label">Password</label>
                        <div className="control-pwd">
                          <input
                            type={pwdType}
                            name="Password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={state.Password}
                            onChange={handleChange}
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
                        <div className="text-end pt-2 d-none">
                          <a
                            href="/auth/forgot-Password"
                            className="link-small-bold text-decoration-none"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 pt-3">
                      <button
                        className="btn indigo d-block w-100 py-2"
                        onClick={handleClick}
                      >
                        <span>Sign In</span>
                      </button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

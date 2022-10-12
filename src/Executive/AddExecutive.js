import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getUserMasterDetailByID, IU_UserMaster, SendMail } from "../config/api";

export default function AddExecutive(props) {
  const [state, setState] = useState({
    ID:0,
    Salutation:"",
    FirstName:"",
    MiddleName:"",
    LastName:"",
    EmailID:"",
    Mobile:"",
    Location:"",
    JoiningDate:"",
    Type:"executive",
    CreatedBy:sessionStorage.getItem("UserID"),
    errors: [],
  });
  const {
    match: { params },
  } = props;
  const { id } = params;

  useEffect(() => {
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined")  {
      UpdateData(id);
    }
  }, []);
  function handlechange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  async function SaveData() {debugger;
    //console.log(state);
    if (validate()) {
      await IU_UserMaster(state)
        .then((response) => {
          if(response[0][0].data==="email exists"){
            setState({...state,errors:{EmailID:"emailid already exists"}});
          }else if(response[0][0].data==="ok"){
          SendCredential(response[0][0].EmailID, "Legavac"
              , "Hi " + response[0][0].Salutation + " " + response[0][0].FirstName + " " + response[0][0].LastName +
               ", <br/>Username: " + response[0][0].UserCode
              + "<br/>Password: " + response[0][0].Password +
              "<br/>Please follow this link for login:\n https://admin.legavac.com")
            
          //alert(response[0][0].ID);
          alert("Save Data Successfully");
          ResetState();
          }
        })
        .catch((error) => {
          alert(error);
        });
      //     console.log(response.data);
      // });
    }
  }
  async function SendCredential(to, subject, message) {
    await SendMail({ To: to, Subject: subject, Message: message })
      .then((response) => {
debugger;
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function UpdateData(id) {
    await getUserMasterDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      ID:0,
      Salutation:"",
      FirstName:"",
      MiddleName:"",
      LastName:"",
      EmailID:"",
      Mobile:"",
      Location:"",
      JoiningDate:"",
      Type:"executive",
      CreatedBy:sessionStorage.getItem("UserID"),
      errors: [],
    });
  }
  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.Salutation) {
      IsValid = false;
      errors["Salutation"] = "Salutation is Required";
    }
    if (!state.FirstName) {
      IsValid = false;
      errors["FirstName"] = "FirstName is Required";
    }
    if (!state.LastName) {
      IsValid = false;
      errors["LastName"] = "LastName is Required";
    }
    if (!state.EmailID) {
      IsValid = false;
      errors["EmailID"] = "EmailID is Required";
    }
    if (!state.Location) {
      IsValid = false;
      errors["Location"] = "Location is Required";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }
  return (
    <>
      <Row>
        <Col sm={12} md={12} lg={12} className="px-0">
          <div className="contentScroll">
            <div className="contentHeader d-flex align-items-center">
              <div className="px-4 w-100">
                <h3 className="contentTitle fs-23 px-0">Add Executive</h3>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/executive">Executive</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add Executive
                  </li>
                </ol>
              </div>
            </div>
            <div className="contentBody py-4 px-5">
              <Row>
                <Col xs={4} md={2} lg={2}>
                  <div className="form-group">
                    <label className="form-label">Salutation</label>
                    <select className="form-select" name="Salutation"
                    onChange={handlechange}>
                      <option value="">Select</option>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Miss.</option>
                    </select>
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.Salutation}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="FirstName"
                      onChange={handlechange}
                      value={state.FirstName}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.FirstName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={3} lg={3}>
                  <div className="form-group">
                    <label className="form-label">Middle Name</label>
                    <input
                      type="text"
                      name="MiddleName"
                      onChange={handlechange}
                      value={state.MiddleName}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.MiddleName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={3} lg={3}>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="LastName"
                      onChange={handlechange}
                      value={state.LastName}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.LastName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Email Id</label>
                    <input
                      type="text"
                      name="EmailID"
                      onChange={handlechange}
                      value={state.EmailID}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.EmailID}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Mobile</label>
                    <input
                      type="text"
                      name="Mobile"
                      onChange={handlechange}
                      value={state.Mobile}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.Mobile}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      name="Location"
                      onChange={handlechange}
                      value={state.Location}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.Location}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Joining Date</label>
                    <input
                      type="date"
                      name="JoiningDate"
                      onChange={handlechange}
                      value={state.JoiningDate}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.JoiningDate}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col sm={12} md={12}>
                  <div className="d-flex justify-content-center mt-3">
                    <button className="btn orrange me-2" onClick={ResetState}>Reset</button>
                    <button className="btn indigo" onClick={SaveData}>Submit</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

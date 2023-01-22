import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { getCompanyForDDL, getExecutiveDataByID, IU_Company, IU_ExecutiveData, iuexecutivedata, IU_Designation, getDesignationForDDL } from "../config/api";

const AddExecutiveData = (props) => {
  const [state, setState] = useState({
    ID: 0,
    ContactPersonName: "",
    DateOfBirthday: "",
    EmailID: "",
    DesignationID: "",
    Designation: "",
    ContactMobile: "",
    DateOfMeeting: "",
    Remark: "",
    CompanyName: "",
    CompanyID: 0,
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
  });

  const options = [{ label: 'HR' }, { label: 'Recruiter other' }]
  const [search, setSearch] = useState({ Designation: "" });

  const [cname, setCompanyName] = useState([]);
  const [companyddl, setCompanyDDL] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [designationddl, setDesignationDDL] = useState([]);
  const {
    match: { params },
  } = props;
  const { id } = params;
  useEffect(() => {
    BindCompanyDDL();
    BindDesignationDDL();
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined") {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }


  function handlechange(e) {
    debugger;
    setState({ ...state, [e.target.name]: e.target.value });
  }
  async function handlechangecompany(e) {
    debugger;
    const arr = [];
    if (e.__isNew__ === true) {
      await IU_Company({
        CompanyID: 0,
        CompanyName: e.label,
        CreatedBy: sessionStorage.getItem("UserID"),
      }).then((response) => {
        arr.push({ key: response[0][0].ID, value: response[0][0].name });
      });
    } else {
      arr.push({ key: e.value, value: e.label });
    }
    debugger;
    setState({
      ...state,
      CompanyID: arr[0].key.toString(),
      CompanyName: arr[0].value.toString(),
    });
    setCompanyName(e);
  }
  async function BindCompanyDDL() {
    await getCompanyForDDL().then((response) => {
      setCompanyDDL(response[0]);
    });
  }
  async function handlechangedesignation(e) {
    debugger;
    const arr = [];
    if (e.__isNew__ === true) {
      await IU_Designation({
        ID: 0,
        Name: e.label,
        CreatedBy: sessionStorage.getItem("UserID"),
      }).then((response) => {
        arr.push({ key: response[0][0].ID, value: response[0][0].name });
      });
    } else {
      arr.push({ key: e.value, value: e.label });
    }
    debugger;
    setState({
      ...state,
      DesignationID: arr[0].key.toString(),
      Designation: arr[0].value.toString(),
    });
    setDesignation(e);
  }
  async function BindDesignationDDL() {
    await getDesignationForDDL().then((response) => {
      setDesignationDDL(response[0]);
    });
  }
  async function UpdateData(id) {
    await getExecutiveDataByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function ResetState() {
    setState({
      ID: 0,
      ContactPersonName: "",
      DateOfBirthday: "",
      EmailID: "",
      DesignationID: "",
      Designation: "",
      ContactMobile: "",
      DateOfMeeting: "",
      Remark: "",
      CompanyName: "",
      CompanyID: 0,
      CreatedBy: sessionStorage.getItem("UserID"),
      errors: [],
    });
    setCompanyName([]);
    setDesignation([]);
  }
  async function SaveData() {
    debugger;
    //console.log(state);
    if (validate()) {
      await iuexecutivedata(state)
        .then((response) => {
          //alert(response[0][0].ID);
          if (response[0][0].ID === "already used") {
            let errors = {};
            errors["CompanyName"] = "Already used by another executive";
            setState({
              ...state,
              errors: errors,
            });
          } else {
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
  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.ContactPersonName) {
      IsValid = false;
      errors["ContactPersonName"] = "Contact Person Name is Required";
    }
    // if (!state.DateOfBirthday) {
    //   IsValid = false;
    //   errors["DateOfBirthday"] = "Date Of Birthday is Required";
    // }
    if (!state.EmailID) {
      IsValid = false;
      errors["EmailID"] = "Email ID is Required";
    }
    if (!state.Designation) {
      IsValid = false;
      errors["Designation"] = "Designation is Required";
    }
    if (!state.ContactMobile) {
      IsValid = false;
      errors["ContactMobile"] = "Contact Mobile is Required";
    }
    // if (!state.DateOfMeeting) {
    //   IsValid = false;
    //   errors["DateOfMeeting"] = "Date Of Meeting is Required";
    // }
    if (!state.CompanyName) {
      IsValid = false;
      errors["CompanyName"] = "CompanyName is Required";
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
                <h3 className="contentTitle fs-23 px-0">Add Executive Data</h3>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/view-executivedata">View Executive Data</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add Executive Data
                  </li>
                </ol>
              </div>
            </div>
            <div className="contentBody py-4 px-5">
              <Row>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <CreatableSelect
                      name="CompanyName"
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={handlechangecompany}
                      //onInputChange={handleInputChange}
                      options={companyddl}
                      value={cname}
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.CompanyName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Contact Person Name</label>
                    <input
                      type="text"
                      name="ContactPersonName"
                      className="form-control"
                      value={state.ContactPersonName}
                      onChange={handlechange}
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.ContactPersonName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>

                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Date Of Birthday</label>
                    <input
                      type="date"
                      name="DateOfBirthday"
                      className="form-control"
                      value={state.DateOfBirthday}
                      onChange={handlechange}
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.DateOfBirthday}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>

                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">EmailID</label>
                    <input
                      type="text"
                      name="EmailID"
                      className="form-control"
                      value={state.EmailID}
                      onChange={handlechange}
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
                    {/*<label className="form-label">Designation</label>
                     <select className="form-select" name="Designation" value={state.Designation} onChange={handlechange}>
                      <option value="0">Select Designation</option>
                      <option value="1">HR</option>
                      <option value="2">Recruiter Other</option>
                    </select> */}
                    <label className="form-label">Designation</label>
                    <CreatableSelect
                      name="Designation"
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={handlechangedesignation}
                      //onInputChange={handleInputChange}
                      options={designationddl}
                      value={designation}
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.Designation}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="text"
                      name="ContactMobile"
                      className="form-control"
                      value={state.ContactMobile}
                      onChange={handlechange}
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.ContactMobile}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Date of meeting</label>
                    <input type="date" name="DateOfMeeting" className="form-control"
                      value={state.DateOfMeeting}
                      onChange={handlechange} />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.DateOfMeeting}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={8} lg={8}>
                  <div className="form-group">
                    <label className="form-label">Remark</label>
                    <textarea className="form-control" placeholder="Remark" name="Remark"
                      value={state.Remark}
                      onChange={handlechange} />
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
};

export default AddExecutiveData;

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import {
  getCompanyForDDL,
  getCTCDashboardByID,
  IU_Company,
  IU_CTCDashboard,
} from "../config/api";

export default function AddCTCDashboard(props) {
  const [state, setState] = useState({
    ID: 0,
    Salutation: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    CompanyID: "",
    CompanyName: "",
    JoiningDate: "",
    CTC: "0",
    CTCAmount: "0",
    CTCType: "Thousand",
    CTCPer: "0",
    TotalAmount: "0",
    GST: "0",
    PaymentYear: "0",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
  });
  const [cname, setCompanyName] = useState([]);
  const [companyddl, setCompanyDDL] = useState([]);
  const {
    match: { params },
  } = props;
  const { id } = params;
  useEffect(() => {
    debugger;
    BindCompanyDDL();
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined") {
      UpdateData(id);
    }
  }, []);
  function handlechange(e) {
    debugger;
    if (e.target.name === "CTCAmount") {
      let _ttlamount = 0;
      let _amt = 0;
      if (state.CTCType === "Thousand") {
        _amt = e.target.value * 1000;
        _ttlamount = (_amt * state.CTCPer) / 100;
      } else if (state.CTCType === "Lakh") {
        _amt = e.target.value * 100000;
        _ttlamount = (_amt * state.CTCPer) / 100;
      }
      let _gst = Math.round((_ttlamount * 18) / 100);
      setState({
        ...state,
        CTC: _amt,
        CTCAmount: e.target.value,
        TotalAmount: Math.round(_ttlamount),
        GST: _gst,
      });
    } else if (e.target.name === "CTCType") {
      let _ttlamount = 0;
      let _amt = 0;
      if (e.target.value === "Thousand") {
        _amt = state.CTCAmount * 1000;
        _ttlamount = (_amt * state.CTCPer) / 100;
      } else if (e.target.value === "Lakh") {
        _amt = state.CTCAmount * 100000;
        _ttlamount = (_amt * state.CTCPer) / 100;
      }
      let _gst = Math.round((_ttlamount * 18) / 100);
      setState({
        ...state,
        CTCType: e.target.value,
        TotalAmount: Math.round(_ttlamount),
        GST: _gst,
      });
    } else if (e.target.name === "CTCPer") {
      let _ttlamount = 0;
      let _amt = 0;
      if (state.CTCType === "Thousand") {
        _amt = state.CTCAmount * 1000;
        _ttlamount = (_amt * e.target.value) / 100;
      } else if (state.CTCType === "Lakh") {
        _amt = state.CTCAmount * 100000;
        _ttlamount = (_amt * e.target.value) / 100;
      }
      let _gst = Math.round((_ttlamount * 18) / 100);
      setState({
        ...state,
        CTCPer: e.target.value,
        TotalAmount: Math.round(_ttlamount),
        GST: _gst,
      });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
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
        if (typeof response[0][0].ID !== undefined && response[0][0].ID !== 'undefined') {
          arr.push({ key: response[0][0].ID, value: response[0][0].name });
        }
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
  async function UpdateData(id) {
    await getCTCDashboardByID(id)
      .then((response) => {
        setState(response[0][0]);
        if (response[0][0].CompanyID !== '0' && response[0][0].CompanyID !== 0 && response[0][0].CompanyID !== '') {
          setCompanyName({ value: response[0][0].CompanyID, label: response[0][0].CompanyName });
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function ResetState() {
    setState({
      ID: 0,
      Salutation: "",
      FirstName: "",
      MiddleName: "",
      LastName: "",
      CompanyID: "",
      CompanyName: "",
      JoiningDate: "",
      CTC: "0",
      CTCAmount: "0",
      CTCType: "Thousand",
      CTCPer: "0",
      TotalAmount: "0",
      GST: "0",
      PaymentYear: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
      errors: [],
    });
    setCompanyName([]);
  }
  async function SaveData() {
    debugger;
    //console.log(state);
    if (validate()) {
      await IU_CTCDashboard(state)
        .then((response) => {
          //alert(response[0][0].ID);
          if (response[0][0].ID !== "" && response[0][0].ID !== "undefined") {
            alert("Save  Data  Successfully");
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
    if (!state.CompanyName) {
      IsValid = false;
      errors["CompanyName"] = "CompanyName is Required";
    }
    if (!state.CTC) {
      IsValid = false;
      errors["CTC"] = "CTC is Required";
    }
    if (!state.JoiningDate) {
      IsValid = false;
      errors["JoiningDate"] = "JoiningDate is Required";
    }
    if (!state.PaymentYear) {
      IsValid = false;
      errors["PaymentYear"] = "PaymentYear is Required";
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
                <h3 className="contentTitle fs-23 px-0">Add CTC Dashboard</h3>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/dashboard-ctc">CTC Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add CTC Dashboard
                  </li>
                </ol>
              </div>
            </div>
            <div className="contentBody py-4 px-5">
              <Row>
                <Col xs={4} md={2} lg={2}>
                  <div className="form-group">
                    <label className="form-label">Salutation</label>
                    <select
                      className="form-select"
                      name="Salutation"
                      onChange={handlechange}
                    >
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
                    {/* <input
                    type="text"
                    className="form-control big"
                    placeholder="Enter company name"
                    value={state.CompanyName}
                    onChange={handleChange}
                    name="CompanyName"
                  /> */}
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.CompanyName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={3} lg={3}>
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
                <Col xs={12} md={12} lg={12}></Col>
                <Col xs={12} md={3} lg={3}>
                  <div className="form-group">
                    <label className="form-label">CTC</label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="CTCAmount"
                        onChange={handlechange}
                        value={state.CTCAmount}
                        className="form-control text-end"
                      />
                      <select
                        className="form-select"
                        style={{ maxWidth: 120 }}
                        name="CTCType"
                        onChange={handlechange}
                        value={state.CTCType}
                      >
                        <option value="Thousand">Thousand</option>
                        <option value="Lakh">Lakh</option>
                      </select>
                    </div>
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.CTCAmount}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={2} lg={2}>
                  <div className="form-group">
                    <label className="form-label">% CTC</label>
                    <input
                      type="text"
                      name="CTCPer"
                      onChange={handlechange}
                      value={state.CTCPer}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.CTCPer}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>

                <Col xs={12} md={2} lg={2}>
                  <div className="form-group">
                    <label className="form-label">Total Amount</label>
                    <input
                      type="text"
                      name="TotalAmount"
                      onChange={handlechange}
                      value={state.TotalAmount}
                      className="form-control"
                      disabled
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.TotalAmount}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={2} lg={2}>
                  <div className="form-group">
                    <label className="form-label">GST</label>
                    <input
                      type="text"
                      name="GST"
                      onChange={handlechange}
                      value={state.GST}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">{state.errors.GST}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={12} md={2} lg={2}>
                  <div className="form-group">
                    <label className="form-label">Payment Year</label>
                    <input
                      type="text"
                      name="PaymentYear"
                      onChange={handlechange}
                      value={state.PaymentYear}
                      className="form-control"
                    />
                    {state.errors ? (
                      <div className="invalid-feedback">
                        {state.errors.PaymentYear}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col sm={12} md={12}>
                  <div className="d-flex justify-content-center mt-3">
                    <button className="btn orrange me-2" onClick={ResetState}>
                      Reset
                    </button>
                    <button className="btn indigo" onClick={SaveData}>
                      Submit
                    </button>
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

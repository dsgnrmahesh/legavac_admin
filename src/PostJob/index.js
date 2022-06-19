import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Modal from "react-bootstrap/Modal";
import { IU_Postjob, getJobtitleForDDL, getSubjobtitleForDDLByJobTitleId, getCityForDDL,
   getEducationDetail, IU_Company, getCompanyForDDL, getCountryForDDL, getStateForDDLByCountryID,
    getCityForDDLByStateID, getDistrictForDDLByCityID, getTalukaForDDLByDistrictID, IU_Taluka, IU_District } from "../config/api";
import CreatableSelect from "react-select/creatable";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function PostJob({ setShow, show, setSmShow }) {
  const [state, setState] = useState({
    PostjobID: "0",
    CompanyName: "",
    CompanyEmailID: "",
    JobDescription: "",
    JobTitleId: "",
    SubJobTitleId: "",
    CountryId: "",
    StateId: "",
    CityId: "",
    DistrictId: "",
    TalukaId: "",
    NumberOfHireEmployee: "",
    Qualifications: "",
    ExperienceInY: "",
    ExperienceInM: "",
    // CompanyEmailID:"",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
  });
  const [editorState, setEditorStage] = useState();
  const [eduList, setEduList] = useState([]); //["edu 1", " edu 2", "edu 3", "edu 4"];
  //const [show, setShow] = useState(false);
  const [jobtitle, setJobTitle] = useState([]);
  const [subjobtitle, setSubJobTitle] = useState([]);
  const [countryddl, setCountryDDL] = useState([]);
  const [stateddl, setStateDDL] = useState([]);
  const [cityddl, setCityDDL] = useState([]);
  const [districtddl, setDistrictDDL] = useState([]);
  const [talukaddl, setTalukaDDL] = useState([]);
  const [err, setError] = useState({ errors: [] });
  const [redirect, setRedirect] = useState(false);
  const [chk, setChk] = useState([]);
  const [educhk, setEduChk] = useState([]);
  const jobtypelist = ["fullTime", "partTime", "flexible"];
  const [cname, setCompanyName] = useState([]);
  const [companyddl, setCompanyDDL] = useState([]);
  const [district, setDistrict] = useState({DistrictID:"0",DistrictName:""});
  const [city, setCity] = useState({CityID:"0",CityName:""});
  const [tname, setTName] = useState();
  function handlechangejobtitle(e) {
    setState({ ...state, JobTitleId: e.target.value });
    if (e.target.name === "JobTitleId") {
      BindSubJobtitleDDL(e.target.value);
    }
  }
  let chk1 = {};

  function handleChangejobtypechk(e) {

    const checkedArr = [];
    const checkeds = document.getElementsByClassName('jobtypechk');
    for (let i = 0; i < checkeds.length; i++) {
      if (checkeds[i].checked) {
        checkedArr.push(checkeds[i].value);
      }
    }
    //value = checkedArr;
    setState({ ...state, JobType: checkedArr.toString() });
  }
  function handleChangeeduchk(e) {
    const checkedArr = [];
    const checkeds = document.getElementsByClassName('educationchk');
    for (let i = 0; i < checkeds.length; i++) {
      if (checkeds[i].checked) {
        checkedArr.push(checkeds[i].value);
      }
    }
    //value = checkedArr;
    setState({ ...state, Qualifications: checkedArr.toString() });
  }
  function handleChange(e) {debugger;
    if (e.target.name === "CountryId") {
      BindStateDDLByCountryID(e.target.value);
    } else if (e.target.name === "StateId") {
      BindCityDDLByStateID(e.target.value);
    } else if (e.target.name === "CityId") {
      BindDistrictDDLByCityID(e.target.value);
      setCity({...city,CityID:e.target.value});
    } else if (e.target.name === "DistrictId") {
      BindTalukaDDLByDistrictID(e.target.value);
    }
    setState({ ...state, [e.target.name]: e.target.value });
    
  }
  async function handlechangecompany(e) {
    const arr = [];
    if (e.__isNew__ === true) {
      await IU_Company({
        CompanyID: 0,
        CompanyName: e.label,
        CreatedBy: sessionStorage.getItem("UserID"),
      }).then((response) => {
        arr.push(response[0][0].ID);
      });
    } else {
      arr.push(e.value);
    }
    setState({ ...state, CompanyName: arr.toString() });
    setCompanyName(e);
  }
  async function handlechangedistrict(e) {
    const arr = [];
    if (e.__isNew__ === true) {
      await IU_District({
        DistrictId: "0",
        DistrictName: e.label,
        DistrictCode: "",
        CityId: city.CityID,
        CreatedBy:sessionStorage.getItem("UserID"),
      }).then((response) => {
        arr.push(response[0][0].ID);
      });
    } else {
      arr.push(e.value);
    }
    setState({ ...state, DistrictId: arr.toString() });
    setDistrict({DistrictID:e.value,DistrictName:e});
    BindTalukaDDLByDistrictID(e.value);
  }
  async function handlechangetaluka(e) {
    const arr = [];
    if (e.__isNew__ === true) {
      await IU_Taluka({
        TalukaId: "0",
        TalukaName: e.label,
        TalukaCode: "",
        DistrictId: district.DistrictID,
        CreatedBy:sessionStorage.getItem("UserID"),
      }).then((response) => {
        arr.push(response[0][0].ID);
      });
    } else {
      arr.push(e.value);
    }
    setState({ ...state, TalukaId: arr.toString() });
    setTName(e);
  }
  async function BindJobtitleDDL() {
    await getJobtitleForDDL()
      .then((response) => {
        setJobTitle(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindCountryDDL() {debugger;
    await getCountryForDDL()
      .then((response) => {
        setCountryDDL(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindStateDDLByCountryID(CountryID) {
    await getStateForDDLByCountryID(CountryID)
      .then((response) => {
        setStateDDL(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindCityDDLByStateID(StateID) {
    await getCityForDDLByStateID(StateID)
      .then((response) => {
        setCityDDL(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindDistrictDDLByCityID(CityID) {
    await getDistrictForDDLByCityID(CityID)
      .then((response) => {
        setDistrictDDL(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindTalukaDDLByDistrictID(DistrictID) {
    await getTalukaForDDLByDistrictID(DistrictID)
      .then((response) => {
        setTalukaDDL(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindSubJobtitleDDL(id) {
    await getSubjobtitleForDDLByJobTitleId(id)
      .then((response) => {
        setSubJobTitle(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindEducationList() {
    await getEducationDetail()
      .then((response) => {
        setEduList(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    BindJobtitleDDL(); BindCountryDDL(); BindEducationList(); BindSubJobtitleDDL();
    BindCompanyDDL();
  }, []);

  async function BindCompanyDDL() {
    await getCompanyForDDL().then((response) => {
      setCompanyDDL(response[0]);
    });
  }
  async function SaveData() {
    //e.preventDefault();
    //bindchk();
    if (validate()) {
      await IU_Postjob(state)
        .then((response) => {
          if(response[0][0].ID>0){
          alert("Data Saved Successfully");
          ResetState();
          //setModalShow(false);
          //bindData();
          setRedirect(true);
          }else
          {alert("Try Again..");}
        })
        .catch((error) => {
          alert(error);
        });
    }
  }



  async function ResetState() {debugger;
    setState({
      PostjobID: "0",
      CompanyName: "",
      CompanyEmailID: "",
      JobDescription: "",
      JobTitleId: "",
      SubJobTitleId: "",
      CountryId: "",
      StateId: "",
      CityId: "",
      DistrictId: "",
      TalukaId: "",
      JobType: "",
      NumberOfHireEmployee: "",
      Qualifications: "",
      // Experience:"",
      ExperienceInY: "",
      ExperienceInM: "",
      // CompanyEmailID:"",
      // CreatedBy:"0",
      CreatedBy: sessionStorage.getItem("UserID"),
      errors: []
    });
    setCompanyName("");
    setDistrict({DistrictID:"0",DistrictName:""});
    setCity({CityID:"0",CityName:""});
    setTName();
    const ec = document.getElementsByClassName('educationchk');
    for (let i = 0; i < ec.length; i++) {
      ec[i].checked=false;      
    }
    const jtc = document.getElementsByClassName('jobtypechk');
    for (let i = 0; i < jtc.length; i++) {
        jtc[i].checked=false;
    }
  }
  function validate() {
    let errors = {};
    let IsValid = true;

debugger;

    if (!state.CompanyName) {
      IsValid = false;
      errors["CompanyName"] = "Company Name is Required";
    }

    // if (!state.CompanyEmailID) {
    //   IsValid = false;
    //   errors["CompanyEmailID"] = "Company Email ID is Required";
    // }

    // if(!state.JobDescription){
    //   IsValid = false;
    //   errors["JobDescription"] = "Job Decription is Required";
    // }

    if (!state.JobTitleId) {
      IsValid = false;
      errors["JobTitleId"] = "Job Title is Required";
    }

    if (!state.CityId) {
      IsValid = false;
      errors["CityId"] = "City is Required";
    }

    if (!state.Qualifications) {
      IsValid = false;
      errors["Qualifications"] = "Qualifications is Required";
    }

    // if(!state.JobTitleId){
    //   IsValid = false;
    //   errors["JobTitleId"] = "Job Title is Required";
    // }

    // if(!state.NumberOfHireEmployee){
    //   IsValid = false;
    //   errors["NumberOfHireEmployee"] = "Number of hire employee is Required";
    // }
    setState({
      ...state,
      errors: errors
    });
    return IsValid;
  }

  const renderEduList = eduList.map((edu, idx) => (
    <Col sm={12} md={6} key={idx}>
      <div className="form-check me-4">
        <input
          className="form-check-input educationchk"
          type="checkbox"
          value={edu.EducationID}
          name={edu.EducationID}
          id={"chkEdu_" + idx}
          onChange={handleChangeeduchk}
        />
        <label className="form-check-label educationchk" htmlFor={"chkEdu_" + idx}>
          {edu.EducationName}
        </label>
      </div>
    </Col>
  ));
  if (redirect) {
    window.location.href = "/posted-jobs";
  }

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="px-4">
          <div className="pe-5">
            <img src="/logo.png" alt="" height={40} />
          </div>
          <Modal.Title>Post Your Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            <Col sm={12} md={7} lg={5}>
              <div className="postForm">
                <Row>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Job Title</label>
                      {/* <input
                    type="text"
                    className="form-control big"
                    placeholder="Enter job title"
                  /> */}
                      <select className="form-control big" name="JobTitleId" value={state.JobTitleId} onChange={handlechangejobtitle}>
                        <option value="0">Select</option>
                        {
                          jobtitle.map((item, index) =>
                            <option value={item.JobTitleId} key={index}>{item.JobTitleName}</option>
                          )
                        }
                      </select>
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.JobTitleId}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Job Sub Title</label>
                      {/* <input
                    type="text"
                    className="form-control big"
                    placeholder="Enter job sub title"
                  /> */}
                      <select className="form-control big" name="SubJobTitleId" value={state.SubJobTitleId} onChange={handleChange}>
                        <option value="0">Select</option>
                        {
                          subjobtitle.map((item, index) =>
                            <option value={item.SubJobTitleId}>{item.SubJobTitleName}</option>
                          )
                        }
                      </select>
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.SubJobTitleId}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
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
                        <div className="invalid-feedback">{state.errors.CompanyName}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Select Country</label>
                      {/* <input
                    type="text"
                    className="form-control big"
                    placeholder="Enter job Location"
                  /> */}
                      <select className="form-control big" name="CountryId" onChange={handleChange} value={state.CountryId}>
                        <option value="0">Select</option>
                        {
                          countryddl.map((item, index) =>
                            <option value={item.CountryId}>{item.CountryName}</option>
                          )
                        }
                      </select>
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.CountryId}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Select State</label>
                      {/* <input
                    type="text"
                    className="form-control big"
                    placeholder="Enter job Location"
                  /> */}
                      <select className="form-control big" name="StateId" onChange={handleChange} value={state.StateId}>
                        <option value="0">Select</option>
                        {
                          stateddl.map((item, index) =>
                            <option value={item.StateId}>{item.StateName}</option>
                          )
                        }
                      </select>
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.StateId}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Select District</label>
                      {/* <input
                    type="text"
                    className="form-control big"
                    placeholder="Enter job Location"
                  /> */}
                      <select className="form-control big" name="CityId" onChange={handleChange} value={state.CityId}>
                        <option value="0">Select</option>
                        {
                          cityddl.map((item, index) =>
                            <option value={item.CityId}>{item.CityName}</option>
                          )
                        }
                      </select>
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.CityId}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Select Taluka</label>
                      {/* <input
                    type="text"
                    className="form-control big"
                    placeholder="Enter job Location"
                  /> */}
                      {/* <select className="form-control big" name="DistrictId" onChange={handleChange}>
                        <option value="0">Select</option>
                        {
                          districtddl.map((item, index) =>
                            <option value={item.DistrictId}>{item.DistrictName}</option>
                          )
                        }
                      </select> */}
                      <CreatableSelect
                        name="DistrictId"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handlechangedistrict}
                        //onInputChange={handleInputChange}
                        options={districtddl}
                        value={district.DistrictName}
                      />
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.DistrictId}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Select City</label>
                      {/* <input
                    type="text"
                    className="form-control big"
                    placeholder="Enter job Location"
                  /> */}
                      {/* <select className="form-control big" name="TalukaId" onChange={handleChange}>
                        <option value="0">Select</option>
                        {
                          talukaddl.map((item, index) =>
                            <option value={item.TalukaId}>{item.TalukaName}</option>
                          )
                        }
                      </select> */}
                      <CreatableSelect
                        name="TalukaId"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handlechangetaluka}
                        //onInputChange={handleInputChange}
                        options={talukaddl}
                        value={tname}
                      />
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.TalukaId}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Job Type</label>
                      <div className="d-flex flex-wrap">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input jobtypechk"
                            type="checkbox"
                            value="fullTime"
                            id="chkJTFullTime"
                            name="fullTime"
                            onChange={handleChangejobtypechk}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chkJTFullTime"
                          >
                            Full Time
                          </label>
                        </div>
                        <div className="form-check me-4">
                          <input
                            className="form-check-input jobtypechk"
                            type="checkbox"
                            value="partTime"
                            id="chkJTPartTime"
                            name="partTime"
                            onChange={handleChangejobtypechk}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chkJTPartTime"
                          >
                            Part Time
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input jobtypechk"
                            type="checkbox"
                            value="flexible"
                            name="flexible"
                            id="chkJTFlexible"
                            onChange={handleChangejobtypechk}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chkJTFlexible"
                          >
                            Flexible Shift
                          </label>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">experience</label>
                      <div className="d-flex mb-2 pb-1">
                        <div
                          className="d-flex align-items-center"
                          style={{ maxWidth: "50%", flex: "1 0 50%" }}
                        >
                          <input
                            type="text"
                            className="form-control big w-auto text-end"
                            style={{ maxWidth: 100 }}
                            name="ExperienceInY"
                            onChange={handleChange}
                            value={state.ExperienceInY}
                          />
                          <p className="ms-3 mb-0 text-nowrap">Year(s)</p>
                        </div>
                        <div
                          className="d-flex align-items-center"
                          style={{ maxWidth: "50%", flex: "1 0 50%" }}
                        >
                          <input
                            type="text"
                            className="form-control big w-auto text-end"
                            style={{ maxWidth: 100 }}
                            name="ExperienceInM"
                            onChange={handleChange}
                            value={state.ExperienceInM}
                          />
                          <p className="ms-3 mb-0 text-nowrap">Month(s)</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Number of hire employees</label>
                      <input
                        type="text"
                        className="form-control big"
                        placeholder="Enter Number of hire employees"
                        name="NumberOfHireEmployee"
                        onChange={handleChange}
                        value={state.NumberOfHireEmployee}
                      />
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.NumberOfHireEmployee}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Qualifications</label>
                      <div className="d-flex flex-wrap">{renderEduList}</div>
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.Qualifications}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                  <Col sm={12} md={12}>
                    <div className="form-group">
                      <label className="form-label">Other Details</label>
                      <CKEditor
                    editor={ClassicEditor}
                    data={state.JobDescription}
                    onBlur={(event, editor) => {
                      setState({ ...state, JobDescription: editor.getData() });
                    }}
                  />
                      {state.errors ? (
                        <div className="invalid-feedback">{state.errors.JobDescription}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
            </Row>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center w-100 m-0">
            <button
              className="btn orrange d-block me-3 text-uppercase py-2"
              style={{ width: 150 }}
              onClick={ResetState}
            >
              reset
            </button>
            <button
              className="btn indigo d-block me-3 text-uppercase py-2"
              style={{ width: 150 }}
              // onClick={SaveData}
              onClick={SaveData}

            >
              submit
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

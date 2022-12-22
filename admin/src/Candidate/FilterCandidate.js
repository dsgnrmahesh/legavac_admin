import React, { useEffect, useState } from "react";
import { IU_Candidate, getCandidateDetailByID } from "../config/api";
import { getFileName } from "../config/constant";
import {
  checkonlyletterandcharacter,
  checkemail,
  checkmobile,
} from "../config/validate";
import { ProgressBar, Row, Col } from "react-bootstrap";

export default function FilterCandidate({ setSmShow, editid, bindData }) {
  const [state, setState] = useState({
    CandidateID: "0",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Mobile: "",
    EmailID: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
  });
  const [file, setFile] = useState();

  // const {
  //   match: { params },
  // } = props;
  // const { id } = params;
  const id = editid;

  useEffect(() => {
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined") {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function SaveData() {
    if (validate()) {
      await IU_Candidate(state)
        .then((response) => {
          //   alert("Data Saved Successfully");
          //   ResetState();
          //   setSmShow(false);
          //   bindData();
          // })
          if (response[0][0].ID !== "exists") {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
          } else {
            //  alert("You Are Already Login...");
            let errors = {};
            errors["Title"] = "You Are Already Login...";
            setState({
              ...state,
              errors: errors,
            });
          }
        })
        .catch((error) => {
          alert(error);
        });
      //     console.log(response.data);
      // });
    }
  }
  async function UpdateData(id) {
    await getCandidateDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      CandidateID: "0",
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Mobile: "",
      EmailID: "",
      // CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
      erroes: [],
    });
  }
  //   const [progress, setProgress] = useState();
  //   let percent = 0;
  //   const config = {
  //     onUploadProgress: (progressEvent) => {
  //     const {loaded, total} = progressEvent;
  //     percent = Math.round((100 * loaded) /total);//Math.floor((loaded * 100) / total)
  //
  //     console.log( `${loaded}kb of ${total}kb | ${percent}%` ) // just to see whats happening in the console
  //     if(percent <= 100) {
  //       setProgress(percent) // hook to set the value of current level that needs to be passed to the progressbar
  //     }
  //     },
  //     headers: {

  //     // custom headers goes here
  //     }
  //     }
  //   async function handlechangepdf(e){
  //     setState({...state,[e.target.name]:getFileName(state.Title,e.target.files[0])});

  //       const formData = new FormData();
  //       formData.append("file", e.target.files[0],getFileName(state.Title,e.target.files[0]));
  //       await UploadAffilationPDF(formData,config).then(response=>{
  //         if(response.success){
  //           setTimeout(() => {
  //             alert("File Uploaded Successfully");
  //           }, 600);
  //           //alert("File Uploaded Successfully");
  //         }
  //         }) .catch((error) => {
  //         alert(error);
  //       });
  //   }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.FirstName) {
      IsValid = false;
      errors["FirstName"] = "FirstName is Required";
    } else {
      if (!checkonlyletterandcharacter(state.FirstName)) {
        IsValid = false;
        errors["FirstName"] = "Only letter and character allowed";
      }
    }

    if (!state.LastName) {
      IsValid = false;
      errors["LastName"] = "LastName is Required";
    } else {
      if (!checkonlyletterandcharacter(state.LastName)) {
        IsValid = false;
        errors["LastName"] = "Only letter and character allowed";
      }
    }

    if (!state.Mobile) {
      IsValid = false;
      errors["Mobile"] = "Mobile is Required";
    } else {
      if (!checkmobile(state.Mobile)) {
        IsValid = false;
        errors["Mobile"] = "Only Valid Mobile Number allowed";
      }
    }

    if (!state.EmailID) {
      IsValid = false;
      errors["EmailID"] = "EmailID is Required";
    } else {
      if (!checkemail(state.EmailID)) {
        IsValid = false;
        errors["EmailID"] = "Only Valid EmailID allowed";
      }
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
        <Col sm={12} md={12}>
          <div className="form-group">
            <label className="form-label">Designation</label>
            {/*<input
          type="text"
          name="FirstName"
          onChange={handlechange}
          value={state.FirstName}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.FirstName}</div>
        ) : (
          ""
        )}*/}
            <select
              className="form-select me-3"
              name="Select Designation"
              onChange={handlechange}
            >
              <option value="0">Select Designation</option>
            </select>
          </div>
        </Col>

        <Col sm={12} md={12}>
          <div>
            <label className="form-label">Country</label>
            {/* <input
              type="text"
              name="LastName"
              onChange={handlechange}
              value={state.LastName}
              className="form-control"
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.LastName}</div>
            ) : (
              ""
            )}*/}
            <select
              className="form-select"
              name="Select Country"
              onChange={handlechange}
            >
              <option value="0">Select Country</option>
              <option value="1">India</option>
            </select>
          </div>
        </Col>

        <Col sm={12} md={12}>
          <div>
            <label className="form-label">State</label>
            {/*<input
              type="text"
              name="Mobile"
              onChange={handlechange}
              value={state.Mobile}
              className="form-control"
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.Mobile}</div>
            ) : (
              ""
            )}*/}
            <select
              className="form-select"
              name="Select State"
              onChange={handlechange}
            >
              <option value="0">Select State</option>
              <option value="1">Maharashtra</option>
            </select>
          </div>
        </Col>

        <Col sm={12} md={12}>
          <div>
            <label className="form-label">Select City</label>
            {/*<input
              type="text"
              name="EmailID"
              onChange={handlechange}
              value={state.EmailID}
              className="form-control"
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.EmailID}</div>
            ) : (
              ""
            )}*/}
            <select
              className="form-select"
              name="Select City"
              onChange={handlechange}
            >
              <option value="0">Select City</option>
            </select>
          </div>
        </Col>

        <Col sm={12} md={12}>
          <div>
            <label className="form-label">Notice Period</label>
            <select
              className="form-select"
              name="Select Duration"
              onChange={handlechange}
            >
              <option value="0">Select Duration of Notice Period</option>
            </select>
          </div>
        </Col>

        <Col sm={12} md={12}>
          <div>
            <label className="form-label">Experience</label>
            <select
              className="form-select"
              name="Select Experience"
              onChange={handlechange}
            >
              <option value="0">Select Experience</option>
            </select>
          </div>
        </Col>

        <Col sm={12} md={12}>
          <div>
            <label className="form-label">Salary</label>
            <select
              className="form-select"
              name="Select Salary"
              onChange={handlechange}
            >
              <option value="0">Select Salary</option>
            </select>
          </div>
        </Col>

        {/* <div className="form-group">
            <label className="form-label">Upload File</label>
            <input
              type="file"
              name="Pdf"
              className="form-control"
              onChange={handlechangepdf}
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.Pdf}</div>
            ) : (
              ""
            )}
           
          </div>
           {progress && <ProgressBar now={progress} label={`${progress}%`} />} 
            */}
        <Col sm={12} md={12}>
          <div className="d-flex justify-content-end">
            <button onClick={ResetState} className="btn orrange me-2">
              Reset
            </button>
            <button onClick={SaveData} className="btn indigo">
              Submit
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

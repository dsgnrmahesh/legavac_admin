import React, { useEffect, useState } from "react";
import { IU_MembershipPlan, getMembershipplanDetailByID, getMembershipplanfeatureForDDL } from "../config/api";
import { getFileName } from "../config/constant";
import { checkprice, checkonlyletterandcharacter, checkpdffile, checkimageformat, checkmobile, checkemail } from "../config/validate";
import { ProgressBar } from 'react-bootstrap';
import { Col, Row, Container } from "react-bootstrap";
import Select from "react-select";

export default function AddMembershipPlan({ setSmShow, editid, bindData }) {
  const [state, setState] = useState({
    MembershipplanID: "0",
    PlanName: "",
    Price: "",
    Durationtype: "",
    Duration: "",
    Membershipplanfeature: "",
    // Name:"",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
  });
  const [file, setFile] = useState();
  const [upFiles, setUpFiles] = useState();

  const [feaList, setFeaList] = useState([]); //["edu 1", " edu 2", "edu 3", "edu 4"]
  const [feachk, setFeaChk] = useState([]);

  const [data, setData] = useState([]);

  // const {
  //   match: { params },
  // } = props;
  // const { id } = params;
  const id = editid;

  function handlechangefeature(e) {
    const a = Array.isArray(e) ? e.map(x => x.value) : [];
    setState({ ...state, Membershipplanfeature: a.toString() });
  }
  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }


  async function BindFeatureList() {
    await getMembershipplanfeatureForDDL()
      .then((response) => {
        setFeaList(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    BindFeatureList();
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined") {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }


  async function SaveData() {

    if (validate()) {

      await IU_MembershipPlan(state)

        .then((response) => {
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href = "/membershipplan";
          }
          else {
            //alert("This Plan Name Already exists...");
            let errors = {};
            errors["PlanName"] = "This Plan Already exists...";
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

    await getMembershipplanDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      MembershipplanID: "0",
      PlanName: "",
      Price: "",
      Durationtype: "",
      Duration: "",
      Membershipplanfeature: "",
      //Name:"",
      //  CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
      erroes: []
    });
  }


  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.PlanName) {
      IsValid = false;
      errors["PlanName"] = "PlanName is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.PlanName)) {
        IsValid = false;
        errors["PlanName"] = "Only letter and character allowed";
      }
    }


    if (!state.Price) {
      IsValid = false;
      errors["Price"] = "Price is Required";
    }
    else {
      if (!checkprice(state.Price)) {
        IsValid = false;
        errors["Price"] = "Only Two Decimal Point allowed";
      }
    }

    if (!state.Durationtype) {
      IsValid = false;
      errors["Durationtype"] = "Durationtype is Required";
    }
    if (!state.Duration) {
      IsValid = false;
      errors["Duration"] = "Duration is Required";
    }
    // if (!state.Membershipplanfeature) {
    //   IsValid = false;
    //   errors["Membershipplanfeature"] = "Membershipplanfeature is Required";
    // }
    // else{
    //   if (!checkonlyletterandcharacter(state.Membershipplanfeature)) {
    //     IsValid = false;
    //     errors["Membershipplanfeature"] = "Only letter and character allowed";
    //   }
    // }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  return (
    <>
      <div className="form-group">
        <label className="form-label">Plan Name</label>
        <input
          type="text"
          name="PlanName"
          onChange={handlechange}
          value={state.PlanName}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.PlanName}</div>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Price</label>
        <input
          type="text"
          name="Price"
          onChange={handlechange}
          value={state.Price}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Price}</div>
        ) : (
          ""
        )}
      </div>



      <div className="form-group">
        <label className="form-label">Duration</label>
        <input
          type="text"
          name="Duration"
          onChange={handlechange}
          value={state.Duration}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Duration}</div>
        ) : (
          ""
        )}
      </div>

      <div className="form-group">
        <label className="form-label">Duration Type</label>
        <select
          name="Durationtype"
          onChange={handlechange}
          value={state.Durationtype}
          className="form-control"
        >
          <option value="0">Select</option>
          <option value="1">Days</option>
          <option value="2">Month</option>
          <option value="3">Year</option>
        </select>
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Durationtype}</div>
        ) : (
          ""
        )}
      </div>


      <div className="form-group">
        <label className="form-label">Membershipplan Feature</label>
        <Select
          name="Membershipplanfeature"
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handlechangefeature}
          //onInputChange={handleInputChange}
          options={feaList}
          value={feaList.filter(obj => state.Membershipplanfeature.includes(obj.value))}
          isMulti
          isClearable
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Membershipplanfeature}</div>
        ) : (
          ""
        )}
      </div>


      <div className="d-flex justify-content-end">
        <button onClick={ResetState} className="btn orrange me-2">
          Reset
        </button>
        <button onClick={SaveData} className="btn indigo">
          Submit
        </button>
      </div>
    </>
  );
}


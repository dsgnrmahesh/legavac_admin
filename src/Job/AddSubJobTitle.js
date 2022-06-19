import React, { useEffect, useState } from "react";
import {
  IU_Subjobtitle,
  getJobtitleForDDL,
  getSubjobtitleDetailByID,
} from "../config/api";
import { checkonlyletterandcharacter, checkpdffile, checkimageformat, checkvideoformat, checkemailidformat, checkmobilenumberrightway } from "../config/validate";

export default function AddSubjobtitle({ setSmShow, editID }) {
  const [state, setState] = useState({
    SubJobTitleId: "0",
    SubJobTitleName: "",
    JobTitleId: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
    //SubJobTitleId , SubJobTitleName ,JobTitleId ,CreatedBy
  });
  const id = editID;

  const [jobtitleddl, setJobtitleDDL] = useState([]);
  useEffect(() => {
    BindJobtitleDDL();
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined") {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: [e.target.value] });
  }
  async function SaveData() {
    //console.log(state);
    if (validate()) {
      await IU_Subjobtitle(state)
        .then((response) => {
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
          }
          else {
            // alert("This SubJobTitle Name Already exists...");
            let errors = {};
            errors["SubJobTitleName"] = "This SubJobTitle Already exists...";
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
  async function BindJobtitleDDL() {
    await getJobtitleForDDL()
      .then((response) => {
        setJobtitleDDL(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function UpdateData(id) {
    await getSubjobtitleDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      SubJobTitleId: "0",
      SubJobTitleName: "",
      JobTitleId: "",
      // CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.SubJobTitleName) {
      IsValid = false;
      errors["SubJobTitleName"] = "SubJobTitleName is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.SubJobTitleName)) {
        IsValid = false;
        errors["SubJobTitleName"] = "Only letter and character allowed";
      }
    }

    if (!state.JobTitleId) {
      IsValid = false;
      errors["JobTitleId"] = "JobTitleId is Required";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          name="SubJobTitleName"
          onChange={handlechange}
          value={state.SubJobTitleName}
          placeholder="Enter Name"
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.SubJobTitleName}</div>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <select
          name="JobTitleId"
          onChange={handlechange}
          value={state.JobTitleId}
          className="form-select"
        >
          <option value="0">Select</option>
          {jobtitleddl.map((item, index) => {
            return (
              <option value={item.JobTitleId}>{item.JobTitleName}</option>
            );
          })}
        </select>
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.JobTitleId}</div>
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

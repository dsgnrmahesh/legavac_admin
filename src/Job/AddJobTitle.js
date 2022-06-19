import React, { useEffect, useState } from "react";
import { IU_Jobtitle, getJobtitleDetailByID } from "../config/api";
import {checkonlyletterandcharacter,checkpdffile,checkimageformat,checkvideoformat} from "../config/validate";

export default function AddJobTitle({ setSmShow, editID }) {
  const [state, setState] = useState({
    JobTitleId: "0",
    JobTitleName: "",
    errors: [],
    //JobTitleId , JobTitleName , CreatedBy
  });

  const id = editID;

  useEffect(() => {
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined")  {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: [e.target.value] });
  }

  async function SaveData() {
    //console.log(state);
    if (validate()) {
      await IU_Jobtitle(state)
        .then((response) => {
          if(response[0][0].ID!=='exists'){
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
          }
          else{
           // alert("This JobTitle Already exists...");
           let errors = {};
           errors["JobTitleName"] = "This JobTitle Already exists...";
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
    await getJobtitleDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      JobTitleId: "0",
      JobTitleName: "",
     // CreatedBy: "0",
     CreatedBy:sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.JobTitleName) {
      IsValid = false;
      errors["JobTitleName"] = "JobTitleName is Required";
    }
    else{
      if (!checkonlyletterandcharacter(state.JobTitleName)) {
        IsValid = false;
        errors["JobTitleName"] = "Only letter and character allowed";
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
      <div className="form-group">
        <input
          type="text"
          name="JobTitleName"
          onChange={handlechange}
          value={state.JobTitleName}
          placeholder="Enter Name"
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.JobTitleName}</div>
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

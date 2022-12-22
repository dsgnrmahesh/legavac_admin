import React, { useEffect, useState } from "react";
import {
  IU_Education,
  getEducationForDDL,
  getEducationDetailByID,
} from "../config/api";
import { checkonlyletterandcharacter, checkpdffile, checkimageformat, checkvideoformat, checkemailidformat, checkmobilenumberrightway } from "../config/validate";

export default function AddEducation({ setSmShow, editID }) {
  const [state, setState] = useState({
    EducationID: "0",
    EducationName: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
    //EducationID ,EducationName , CreatedBy
  });

  const id = editID;
  const [educationddl, setEducationDDL] = useState([]);
  useEffect(() => {
    BindEducationDDL();
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
      await IU_Education(state)
        .then((response) => {
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href = "/education-master";
          }
          // }
          else {
            // alert("Education Name Already exists...");
            let errors = {};
            errors["Name"] = "This Education Name Already exists...";
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

  async function BindEducationDDL() {
    const educationddl = await getEducationForDDL();
    if (educationddl.error) console.log(educationddl.error);
    else //console.log(educationddl.data);
      setEducationDDL(educationddl.data);
  }

  async function UpdateData(id) {
    await getEducationDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      EducationID: "0",
      EducationName: "",
      //CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
    });
  }
  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.EducationName) {
      IsValid = false;
      errors["EducationName"] = "Name is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.EducationName)) {
        IsValid = false;
        errors["EducationName"] = "Only letter and character allowed";
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
          name="EducationName"
          onChange={handlechange}
          value={state.EducationName}
          placeholder="Enter Name"
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.EducationName}</div>
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

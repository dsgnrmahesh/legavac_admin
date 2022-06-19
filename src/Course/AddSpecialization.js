import React, { useEffect, useState } from "react";
import {
  IU_Specialization,
  getSpecializationForDDL,
  getCourseForDDL,
  getSpecializationDetailByID,
} from "../config/api";
import { checkonlyletterandcharacter, checkpdffile, checkimageformat, checkvideoformat, checkemailidformat, checkmobilenumberrightway } from "../config/validate";

export default function AddSpecialization({ setSmShow, editID }) {
  const [state, setState] = useState({
    SpecializationID: "0",
    SpecializationName: "",
    CourseID: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
    //SpecializationID   ,   Name    , CourseID , CreatedBy
  });

  const id = editID;

  const [specializationddl, setSpecializationDDL] = useState([]);
  const [service, setSpecialization] = useState([]);
  useEffect(() => {
    BindSpecializationDDL();
    BindCourseDDL();
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined") {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  async function SaveData() {
    //console.log(state);

    if (validate()) {
      await IU_Specialization(state)
        .then((response) => {
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href = "/education-master";


          }
          else {
            //  alert("Specialization Name Already exists...");
            let errors = {};
            errors["SpecializationName"] = "This Specialization Name Already exists...";
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
  async function BindSpecializationDDL() {
    const specializationddl = await getSpecializationForDDL();
    if (specializationddl.error) console.log(specializationddl.error);
    else //console.log(specializationddl.data);
      setSpecializationDDL(specializationddl.data);
  }

  async function UpdateData(id) {
    await getSpecializationDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      SpecializationID: "0",
      SpecializationName: "",
      CourseID: "0",
      // CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.SpecializationName) {
      IsValid = false;
      errors["SpecializationName"] = "Name is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.SpecializationName)) {
        IsValid = false;
        errors["SpecializationName"] = "Only letter and character allowed";
      }
    }

    if (!state.CourseID) {
      IsValid = false;
      errors["CourseID"] = "CourseID is Required";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  async function BindCourseDDL() {
    await getCourseForDDL()
      .then((response) => {
        setSpecialization(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          name="SpecializationName"
          onChange={handlechange}
          value={state.SpecializationName}
          placeholder="Enter Name"
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.SpecializationName}</div>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <select
          name="CourseID"
          onChange={handlechange}
          value={state.CourseID}
          className={"form-select"}
        >
          <option value="0">Select</option>
          {service.map((item, index) => {
            return <option value={item.CourseID}>{item.CourseName}</option>;
          })}
        </select>
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CourseID}</div>
        ) : (
          ""
        )}
      </div>
      <div className="d-flex justify-content-end">
        <button onclick={ResetState} className="btn orrange me-2">
          Reset
        </button>
        <button onClick={SaveData} className="btn indigo">
          Submit
        </button>
      </div>
    </>
  );
}

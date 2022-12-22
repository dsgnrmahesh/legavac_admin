import React, { useEffect, useState } from "react";
import {
  IU_Course,
  getCourseForDDL,
  getEducationForDDL,
  getCourseDetailByID,
} from "../config/api";
import {checkonlyletterandcharacter,checkpdffile,checkimageformat,checkvideoformat,checkemailidformat,checkmobilenumberrightway} from "../config/validate";

export default function AddCourse({ setSmShow, editID,bindData }) {
  const [state, setState] = useState({
    CourseID: "0",
    CourseName: "",
    EducationID: "",
   CreatedBy:sessionStorage.getItem("UserID"),
   errors: { Name: "", EducationID: "" },
    //CourseID  ,  Name   ,CreatedBy
  });
  const id = editID;

  const [courseddl, setCourseDDL] = useState([]);
  const [service, setEducation] = useState([]);
  useEffect(() => {   
    BindCourseDDL();
    BindEducationDDL();
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
      await IU_Course(state)
        .then((response) => {
          if(response[0][0].ID!=='exists'){
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
          }
          else{
           // alert("Coures Name Already exists...");
           let errors = {};
           errors["CourseName"] = "Coures Name Already exists...";
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
  async function BindCourseDDL() {
    const courseddl = await getCourseForDDL();
    if (courseddl.error) console.log(courseddl.error);
    else //console.log(courseddl.data);
    setCourseDDL(courseddl.data);
  }

  async function UpdateData(id) {
    await getCourseDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      CourseID: "0",
      CourseName: "",
      EducationID: "",
      //CreatedBy: "0",
      CreatedBy:sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.CourseName) {
      IsValid = false;
      errors["CourseName"] = "Name is Required";
    }
    else{
      if (!checkonlyletterandcharacter(state.CourseName)) {
        IsValid = false;
        errors["CourseName"] = "Only letter and character allowed";
      }
    }

    if (!state.EducationID) {
      IsValid = false;
      errors["EducationID"] = "EducationID is Required";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  async function BindEducationDDL() {
    await getEducationForDDL()
      .then((response) => {
        setEducation(response.data[0]);
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
          name="CourseName"
          onChange={handlechange}
          value={state.CourseName}
          placeholder="Enter Name"
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CourseName}</div>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <select
          name="EducationID"
          onChange={handlechange}
          value={state.EducationID}
          className={"form-select"}
        >
          <option value="0">Select</option>
          {service.map((item, index) => {
            return <option value={item.EducationID}>{item.EducationName}</option>;
          })}
        </select>
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.EducationID}</div>
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

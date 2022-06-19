import React, { useEffect, useState } from "react";
import { IU_Skill, getSkillDetailByID } from "../config/api";
import {checkonlyletterandcharacter,checkpdffile,checkimageformat,checkvideoformat} from "../config/validate";

export default function AddSkill({ setSmShow, editID }) {
  const [state, setState] = useState({
    SkillID: "0",
    Skill: "",
  CreatedBy:sessionStorage.getItem("UserID"),
    errors: [],
  });

  const id = editID;

  useEffect(() => {
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined")  {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function SaveData() {
    //console.log(state);
    if (validate()) {
      await IU_Skill(state)
        .then((response) => {
          if(response[0][0].ID!=='exists'){
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
          }
          else{
           // alert("This Skill Name Already exists...");
           let errors = {};
           errors["Skill"] = "This Skill Already exists...";
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
    await getSkillDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      SkillID: "0",
      Skill: "",
    //  CreatedBy: "0",
    CreatedBy:sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.Skill) {
      IsValid = false;
      errors["Skill"] = "Skill is Required";
    }
    else{
      if (!checkonlyletterandcharacter(state.Skill)) {
        IsValid = false;
        errors["Skill"] = "Only letter and character allowed";
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
          name="Skill"
          onChange={handlechange}
          value={state.Skill}
          placeholder="Enter Name"
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Skill}</div>
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

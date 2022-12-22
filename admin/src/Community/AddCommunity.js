import React, { useEffect, useState } from "react";
import { IU_Community, getCommunityDetailByID } from "../config/api";
import {checkonlyletterandcharacter,checkpdffile,checkimageformat,checkvideoformat,checkemailidformat,checkmobilenumberrightway} from "../config/validate";

export default function AddCommunity({ setSmShow, editID }) {
  const [state, setState] = useState({
    CommunityID: "0",
    CommunityName: "",
   CreatedBy:sessionStorage.getItem("UserID"),
   errors: { CommunityName: "" },

    //CommunityID  , CommunityName  ,CreatedBy
  });

  const id = editID;
  useEffect(() => {
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
      await IU_Community(state)
        .then((response) => {
          if(response[0][0].ID!=='exists'){
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href="/master-setups";
          }
          else{
            //alert("Comunity Name Already exists...");
            let errors = {};
            errors["CommunityName"] = "This Comunity Name Already exists...";
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
    await getCommunityDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      CommunityID: "0",
      CommunityName: "",
      // CreatedBy: "0",
      CreatedBy:sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.CommunityName) {
      IsValid = false;
      errors["CommunityName"] = "CommunityName is Required";
    }
    else{
      if (!checkonlyletterandcharacter(state.CommunityName)) {
        IsValid = false;
        errors["CommunityName"] = "Only letter and character allowed";
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
          name="CommunityName"
          onChange={handlechange}
          value={state.CommunityName}
          placeholder="Enter community name"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CommunityName}</div>
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

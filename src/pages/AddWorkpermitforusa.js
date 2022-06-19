import React, { useEffect, useState } from "react";
import {
  IU_Workpermitforusa,
  getWorkpermitforusaDetailByID,
} from "../config/api";

export default function AddWorkpermitforusa(props) {
  const [state, setState] = useState({
    ID: "0",
    Name: "",
   // CreatedBy: "0",
   CreatedBy:sessionStorage.getItem("UserID"),
    errors: [],
  });

  const {
    match: { params },
  } = props;
  const { id } = params;

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
      await IU_Workpermitforusa(state)
        .then((response) => {
          alert(response[0][0].ID);
          ResetState();
        })
      //   if(response[0][0].ID!=='exists'){
      //     //setModalShow(false);
      //     setSmShow(false);
      //     alert("Data Saved Successfully");
      //     ResetState();
      //   }
      //   else{
      //    // alert("This Workpermit In USA Already exists...");
      //    let errors = {};
      //    errors["Name"] = "This WorkPermit In USA Already exists...";
      //    setState({
      //     ...state,
      //     errors: errors,
      //   });
  
      //   }
      // })
        .catch((error) => {
          alert(error);
        });
      //     console.log(response.data);
      // });
    }
  }
  async function UpdateData(id) {
    await getWorkpermitforusaDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      ID: "0",
      Name: "",
     // CreatedBy: "0",
     CreatedBy:sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.Name) {
      IsValid = false;
      errors["Name"] = "Name is Required";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }
  return (
    <div>
      Name:
      <input
        type="text"
        name="Name"
        onChange={handlechange}
        value={state.Name}
      />
      <br />
      {state.errors ? <div className="errorMsg">{state.errors.Name}</div> : ""}
      <button onClick={SaveData}>Submit</button>
      <br />
      <button onclick={ResetState}>Reset</button>
    </div>
  );
}

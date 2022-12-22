import React, { useEffect, useState } from "react";
import {
  IU_MembershipPlanFeature,
  getMembershipPlanFeatureDetailByID,
} from "../config/api";
import {checkonlyletterandcharacter,checkpdffile,checkimageformat,checkvideoformat,checkemailidformat,checkmobilenumberrightway} from "../config/validate";

export default function AddMembershipPlanFeature({ setSmShow, editID }) {
  const [state, setState] = useState({
    MembershipplanfeatureID: "0",
    Name: "",
    CreatedBy:sessionStorage.getItem("UserID"),
    errors: {Name: "" },
   
  });
  const id = editID;

  // const {
  //   match: { params },
  // } = props;
  // const { id } = params;

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
      await IU_MembershipPlanFeature(state)
        .then((response) => {
        //   alert(response[0][0].ID);
        //   ResetState();
        // })
        if(response[0][0].ID!=='exists'){
          //setModalShow(false);
          setSmShow(false);
          alert("Data Saved Successfully");
          ResetState();
          window.location.href="/master-setups";
        }
        else{
          //alert("This Feature Already exists...");
          let errors = {};
           errors["Name"] = "This Feature Already exists...";
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
    await getMembershipPlanFeatureDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      MembershipplanfeatureID: "0",
      Name: "",
      //CreatedBy: "0",
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
    else{
      if (!checkonlyletterandcharacter(state.Name)) {
        IsValid = false;
        errors["Name"] = "Only letter and character allowed";
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
    name="Name"
    onChange={handlechange}
    value={state.Name}
    placeholder="Enter membership plan feature name"
    className={"form-control"}
  />
  {state.errors ? (
    <div className="invalid-feedback">{state.errors.Name}</div>
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
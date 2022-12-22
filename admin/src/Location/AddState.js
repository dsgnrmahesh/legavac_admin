import React, { useEffect, useState } from "react";
import {
  IU_State,
  getStateForDDL,
  getCountryForDDL,
  getStateDetailByID,
} from "../config/api";
import { checkonlyletterandcharacter, checkpdffile, checkimageformat, checkvideoformat, checkemailidformat, checkmobilenumberrightway } from "../config/validate";

export default function AddState({ setSmShow, editID }) {
  const [state, setState] = useState({
    StateId: "0",
    StateName: "",
    StateCode: "",
    CountryId: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],

    //StateId  , StateName ,StateCode , CountryId ,CreatedBy
  });
  const id = editID;
  const [countryddl, setCountryddl] = useState([]);
  useEffect(() => {
    BindCountryDDL();
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
      await IU_State(state)
        .then((response) => {
          //   alert("Data Saved Successfully");
          //   ResetState();
          //   setSmShow(false);
          //   window.location.href="/location-master";
          // })
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href="/location-master";
          }
          else {
            // alert("State Name Already exists...");
            let errors = {};
            errors["StateName"] = "This  State  Already exists...";
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
    await getStateDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      StateId: "0",
      StateName: "",
      StateCode: "",
      CountryId: "",
      //CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.StateName) {
      IsValid = false;
      errors["StateName"] = "StateName is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.StateName)) {
        IsValid = false;
        errors["StateName"] = "Only letter and character allowed";
      }
    }

    // if (!state.StateCode) {
    //   IsValid = false;
    //   errors["StateCode"] = "StateCode is Required";
    // }
    if (!state.CountryId) {
      IsValid = false;
      errors["CountryId"] = "CountryId is Required";
    }
    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  async function BindCountryDDL() {
    await getCountryForDDL()
      .then((response) => {
        setCountryddl(response[0]);
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
          name="StateName"
          onChange={handlechange}
          value={state.StateName}
          placeholder="Enter state name"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.StateName}</div>
        ) : (
          ""
        )}
      </div>
      {/* <div className="form-group">
        <input
          type="text"
          name="StateCode"
          onChange={handlechange}
          value={state.StateCode}
          placeholder="Enter state code"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.StateCode}</div>
        ) : (
          ""
        )}
      </div> */}
      <div className="form-group">
        <select
          name="CountryId"
          onChange={handlechange}
          value={state.CountryId}
          className={"form-select"}
        >
          <option value="0">Select</option>
          {countryddl.map((item, index) => {
            return <option value={item.CountryId}>{item.CountryName}</option>;
          })}
        </select>
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CountryId}</div>
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

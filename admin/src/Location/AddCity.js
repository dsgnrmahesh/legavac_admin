import React, { useEffect, useState } from "react";
import {
  IU_City,
  getCityForDDL,
  getStateForDDL,
  getCityDetailByID,
} from "../config/api";
import {checkonlyletterandcharacter,checkpdffile,checkimageformat,checkvideoformat,checkemailidformat,checkmobilenumberrightway} from "../config/validate";

export default function AddCity({ setSmShow, editID }) {
  const [state, setState] = useState({
    CityId: "0",
    CityName: "",
    CityCode: "",
    StateId: "",
   CreatedBy:sessionStorage.getItem("UserID"),
    errors: [],

    //CityId ,CityName , CityCode ,  StateId , CreatedBy
  });

  const id = editID;

  const [stateddl, setStateddl] = useState([]);

  useEffect(() => {
    BindStateDDL();
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
      await IU_City(state)
        .then((response) => {
        //   alert("Data Saved Successfully");
        //   ResetState();
        //   setSmShow(false);
        //   window.location.href="/location-master";
        // })
        if(response[0][0].ID!=='exists'){
          //setModalShow(false);
          setSmShow(false);
          alert("Data Saved Successfully");
          ResetState();
          window.location.href="/location-master";
        }
        else{
          //alert("City Name Already exists...");
          let errors = {};
           errors["CityName"] = "This City  Already exists...";
           setState({
            ...state,
            errors: errors,
          });
        }
      })
        .catch((error) => {
          alert(error);
        });
    }
    //     console.log(response.data);
    // });
  }

  async function UpdateData(id) {
    await getCityDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      CityId: "0",
      CityName: "",
      CityCode: "",
      StateId: "",
      //CreatedBy: "0",
      CreatedBy:sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.CityName) {
      IsValid = false;
      errors["CityName"] = "CityName is Required";
    }
    else{
      if (!checkonlyletterandcharacter(state.CityName)) {
        IsValid = false;
        errors["CityName"] = "Only letter and character allowed";
      }
    }

    // if (!state.CityCode) {
    //   IsValid = false;
    //   errors["CityCode"] = "CityCode is Required";
    // }
    if (!state.StateId) {
      IsValid = false;
      errors["StateId"] = "StateId is Required";
    }
    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }
  async function BindStateDDL() {
    await getStateForDDL()
      .then((response) => {
        setStateddl(response[0]);
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
          name="CityName"
          onChange={handlechange}
          value={state.CityName}
          placeholder="Enter district name"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CityName}</div>
        ) : (
          ""
        )}
      </div>
      {/* <div className="form-group">
        <input
          type="text"
          name="CityCode"
          onChange={handlechange}
          value={state.CityCode}
          placeholder="Enter city code"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CityCode}</div>
        ) : (
          ""
        )}
      </div> */}
      <div className="form-group">
        <select
          name="StateId"
          onChange={handlechange}
          value={state.StateId}
          className={"form-select"}
        >
          <option value="0">Select</option>
          {stateddl.map((item, index) => {
            return <option value={item.StateId}>{item.StateName}</option>;
          })}
        </select>
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.StateId}</div>
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

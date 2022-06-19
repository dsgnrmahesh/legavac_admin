import React, { useEffect, useState } from "react";
import {
  IU_District,
  getCityForDDL,
  getDistrictDetailByID,
} from "../config/api";
import {checkonlyletterandcharacter,checkpdffile,checkimageformat,checkvideoformat,checkemailidformat,checkmobilenumberrightway} from "../config/validate";

export default function AddDistrict({ setSmShow, editID }) {
  const [state, setState] = useState({
    DistrictId: "0",
    DistrictName: "",
    DistrictCode: "",
    CityId: "",
   CreatedBy:sessionStorage.getItem("UserID"),
    errors: [],

    //DistrictId ,DistrictName , DistrictCode ,  CityId , CreatedBy
  });

  const id = editID;

  const [cityddl, setCityddl] = useState([]);

  useEffect(() => {
    BindCityDDL();
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined")  {
      UpdateData(id);
    }    
  }, []);
  
  function handlechange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function SaveData() {
    //console.log(state);
    if (validate()) {debugger;
      await IU_District(state)
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
           errors["DistrictName"] = "This District  Already exists...";
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

  async function UpdateData(id) {debugger;
    await getDistrictDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      DistrictId: "0",
      DistrictName: "",
      DistrictCode: "",
      CityId: "",
      //CreatedBy: "0",
      CreatedBy:sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.DistrictName) {
      IsValid = false;
      errors["DistrictName"] = "DistrictName is Required";
    }
    else{
      if (!checkonlyletterandcharacter(state.DistrictName)) {
        IsValid = false;
        errors["DistrictName"] = "Only letter and character allowed";
      }
    }

    // if (!state.DistrictCode) {
    //   IsValid = false;
    //   errors["DistrictCode"] = "DistrictCode is Required";
    // }
    if (!state.CityId) {
      IsValid = false;
      errors["CityId"] = "CityId is Required";
    }
    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }
  async function BindCityDDL() {
    await getCityForDDL()
      .then((response) => {
        setCityddl(response[0]);
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
          name="DistrictName"
          onChange={handlechange}
          value={state.DistrictName}
          placeholder="Enter district name"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.DistrictName}</div>
        ) : (
          ""
        )}
      </div>
      {/* <div className="form-group">
        <input
          type="text"
          name="DistrictCode"
          onChange={handlechange}
          value={state.DistrictCode}
          placeholder="Enter district code"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.DistrictCode}</div>
        ) : (
          ""
        )}
      </div> */}
      <div className="form-group">
        <select
          name="CityId"
          onChange={handlechange}
          value={state.CityId}
          className={"form-select"}
        >
          <option value="0">Select</option>
          {cityddl.map((item, index) => {
            return <option value={item.CityId}>{item.CityName}</option>;
          })}
        </select>
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CityId}</div>
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

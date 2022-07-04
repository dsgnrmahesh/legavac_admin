import React, { useEffect, useState } from "react";
import {
  IU_Taluka,
  getDistrictForDDL,
  getTalukaDetailByID,
} from "../config/api";
import {
  checkonlyletterandcharacter,
  checkpdffile,
  checkimageformat,
  checkvideoformat,
  checkemailidformat,
  checkmobilenumberrightway,
} from "../config/validate";

export default function AddCity({ setSmShow, editID }) {
  const [state, setState] = useState({
    TalukaId: "0",
    TalukaName: "",
    TalukaCode: "",
    DistrictId: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],

    //TalukaId ,TalukaName , TalukaCode ,  DistrictId , CreatedBy
  });

  const id = editID;

  const [districtddl, setDistrictddl] = useState([]);

  useEffect(() => {
    BindDistrictDDL();
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
      await IU_Taluka(state)
        .then((response) => {
          //   alert("Data Saved Successfully");
          //   ResetState();
          //   setSmShow(false);
          //   window.location.href="/location-master";
          // })
          if (response[0][0].ID !== "exists") {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href = "/location-master";
          } else {
            //alert("City Name Already exists...");
            let errors = {};
            errors["TalukaName"] = "This City  Already exists...";
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
    await getTalukaDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      TalukaId: "0",
      TalukaName: "",
      TalukaCode: "",
      DistrictId: "",
      //CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.TalukaName) {
      IsValid = false;
      errors["TalukaName"] = "TalukaName is Required";
    } else {
      if (!checkonlyletterandcharacter(state.TalukaName)) {
        IsValid = false;
        errors["TalukaName"] = "Only letter and character allowed";
      }
    }

    // if (!state.TalukaCode) {
    //   IsValid = false;
    //   errors["TalukaCode"] = "TalukaCode is Required";
    // }
    if (!state.DistrictId) {
      IsValid = false;
      errors["DistrictId"] = "DistrictId is Required";
    }
    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }
  async function BindDistrictDDL() {
    await getDistrictForDDL()
      .then((response) => {
        setDistrictddl(response[0]);
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
          name="TalukaName"
          onChange={handlechange}
          value={state.TalukaName}
          placeholder="Enter taluka name"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.TalukaName}</div>
        ) : (
          ""
        )}
      </div>
      {/* <div className="form-group">
        <input
          type="text"
          name="TalukaCode"
          onChange={handlechange}
          value={state.TalukaCode}
          placeholder="Enter taluka code"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.TalukaCode}</div>
        ) : (
          ""
        )}
      </div> */}
      <div className="form-group">
        <select
          name="DistrictId"
          onChange={handlechange}
          value={state.DistrictId}
          className={"form-select"}
        >
          <option value="0">Select</option>
          {districtddl.map((item, index) => {
            return <option value={item.DistrictId}>{item.DistrictName}</option>;
          })}
        </select>
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.DistrictId}</div>
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

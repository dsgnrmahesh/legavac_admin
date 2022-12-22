import React, { useEffect, useState } from "react";
import {
  IU_Country,
  getCountryForDDL,
  getCountryDetailByID,
} from "../config/api";
import { checkonlyletterandcharacter, checkpdffile, checkimageformat, checkvideoformat, checkemailidformat, checkmobilenumberrightway } from "../config/validate";

export default function AddCountry({ setSmShow, editID }) {
  const [state, setState] = useState({
    CountryId: "0",
    CountryName: "",
    CountryCode: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
    //CountryId ,CountryName , CountryCode ,CreatedBy
  });
  const id = editID;

  const [countryddl, setCountryDDL] = useState([]);
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
      await IU_Country(state)
        .then((response) => {

          if (response[0][0].ID !== 'exists') {

            setSmShow(false);
            alert("Data Saved Successfully");

            ResetState();
            window.location.href="/location-master";
          }
          else {
            // alert("Country Name Already exists...");
            let errors = {};
            errors["CountryName"] = "This  Country  Already exists...";
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

  async function BindCountryDDL() {
    const countryddl = await getCountryForDDL();
    if (countryddl.error) console.log(countryddl.error);
    else //console.log(countryddl.data);
      setCountryDDL(countryddl.data);
  }

  async function UpdateData(id) {
    await getCountryDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      CountryId: "0",
      CountryName: "",
      CountryCode: "",
      //CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.CountryName) {
      IsValid = false;
      errors["CountryName"] = "CountryName is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.CountryName)) {
        IsValid = false;
        errors["CountryName"] = "Only letter and character allowed";
      }
    }

    // if (!state.CountryCode) {
    //   IsValid = false;
    //   errors["CountryCode"] = "CountryCode is Required";
    // }

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
          name="CountryName"
          onChange={handlechange}
          value={state.CountryName}
          placeholder="Enter country name"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CountryName}</div>
        ) : (
          ""
        )}
      </div>
      {/* <div className="form-group">
        <input
          type="text"
          name="CountryCode"
          onChange={handlechange}
          value={state.CountryCode}
          placeholder="Enter country code"
          className={"form-control"}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CountryCode}</div>
        ) : (
          ""
        )}
      </div> */}
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

import React, { useEffect, useState } from "react";
import { IU_Company, getCompanyDetailByID, UploadLogoImage } from "../config/api";
import {checkonlyletterandcharacter,checkpdffile,checkimageformat,checkvideoformat} from "../config/validate";
import { getFileName } from "../config/constant";
import { ProgressBar } from 'react-bootstrap';

export default function AddCompany({ setSmShow, editID }) {
  const [state, setState] = useState({
    CompanyID: "0",
    CompanyName: "",
    Logo: "",
    errors: [],
    //CompanyID , CompanyName , CreatedBy
  });

  const id = editID;

  useEffect(() => {
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined")  {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: [e.target.value] });
  }
  const [progresslogoimage, setProgresslogoimage] = useState();
  let percentlogoimage = 0;
  const configlogoimage = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      percentlogoimage = Math.round((100 * loaded) / total);//Math.floor((loaded * 100) / total)

      console.log(`${loaded}kb of ${total}kb | ${percentlogoimage}%`) // just to see whats happening in the console
      if (percentlogoimage <= 100) {
        setProgresslogoimage(percentlogoimage) // hook to set the value of current level that needs to be passed to the progressbar
      }
    },
    headers: {
      // custom headers goes here
    }
  }
  async function handlechangelogoimage(e) {
    setState({ ...state, [e.target.name]: getFileName(state.CompanyName, e.target.files[0]) });

    const formData = new FormData();
    formData.append("file", e.target.files[0], getFileName(state.CompanyName, e.target.files[0]));
    await UploadLogoImage(formData, configlogoimage).then(response => {
      // alert(response.success);
      if (response.success) {
        setTimeout(() => {
          alert("File Uploaded Successfully");
        }, 600);
        //alert("File Uploaded Successfully");
      }
    }).catch((error) => {
      alert(error);
    });
  }
  async function SaveData() {
    //console.log(state);
    if (validate()) {debugger;
      await IU_Company(state)
        .then((response) => {
          if(response[0][0].ID!=='exists'){
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
          }
          else{
           // alert("This JobTitle Already exists...");
           let errors = {};
           errors["CompanyName"] = "This Company Name Already exists...";
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
    await getCompanyDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      CompanyID: "0",
      CompanyName: "",
      Logo: "",
     CreatedBy:sessionStorage.getItem("UserID"),
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.CompanyName) {
      IsValid = false;
      errors["CompanyName"] = "CompanyName is Required";
    }
    else{
      if (!checkonlyletterandcharacter(state.CompanyName)) {
        IsValid = false;
        errors["CompanyName"] = "Only letter and character allowed";
      }
    }
    if (!state.Logo) {
      IsValid = false;
      errors["Logo"] = "Logo is Required";
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
          name="CompanyName"
          onChange={handlechange}
          value={state.CompanyName}
          placeholder="Enter Name"
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CompanyName}</div>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Upload Logo</label>
        <input
          type="file"
          name="Logo"
          accept=".jpg,.jpeg"
          className="form-control"
          onChange={handlechangelogoimage}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Logo}</div>
        ) : (
          ""
        )}
      </div>
      {progresslogoimage && <ProgressBar now={progresslogoimage} label={`${progresslogoimage}%`} />}
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

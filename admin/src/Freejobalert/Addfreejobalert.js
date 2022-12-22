import React, { useEffect, useState } from "react";
import { IU_Freejobalert, getFreejobalertDetailByID, checkEmailID } from "../config/api";
import { getFileName } from "../config/constant";
import { ProgressBar } from 'react-bootstrap';
import { checkonlyletterandcharacter, checkemailidformat, checkpdffile, checkimageformat, checkvideoformat, checksalary, checkemail, checkmobile } from "../config/validate";

export default function AddFreejobalert({ setSmShow, editid, bindData }) {
  const [state, setState] = useState({
    JobalertID: "0",
    Keywords: "",
    CityId: "",
    Workexpinyr: "",
    Workexpinmonth: "",
    Salaryinlakh: "",
    EmailID: "",
    Sendmerelatedjob: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
  });
  const [file, setFile] = useState();
  const [chkemailid, setEmailID] = useState(false);

  // const {
  //   match: { params },
  // } = props;
  // const { id } = params;
  const id = editid;

  useEffect(() => {
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined") {
      UpdateData(id);
    }
  }, []);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }




  function handlechange(e) {

    if (e.target.name === "CityId") {
      // BindDistrictDDLByCityID(e.target.value);
    } else if (e.target.name === "Keywords") {
      setState({
        ...state,
        Keywords: e.target.value,
        Password:
          e.target.value.charAt(0).toUpperCase() +
          e.target.value.substring(1, 3) +
          "@12345",
      });
    }
    let errors = {};
    if (e.target.name === 'Mobile') {
      if (!checkmobile(e.target.value)) {
        errors["Mobile"] = "Enter Valid Mobile";
      } else {
        errors["Mobile"] = "";
      }
      setState({ ...state, [e.target.name]: e.target.value, errors: errors });
    }
    else if (e.target.name === 'EmailID') {
      if (!checkemail(e.target.value)) {
        errors["EmailID"] = "Enter Valid Email";
      }
      else {
        if (checkemailidexists(e.target.value)) {
          errors["EmailID"] = "Email ID Already Exists";
          //setState({ ...state, errors: errors });
        }
        else {
          errors["EmailID"] = "";
          // setState({ ...state, errors: errors });
        }
        //errors["EmailID"] = "";
      }
      setState({ ...state, [e.target.name]: e.target.value, errors: errors });
    }



    else
      if (e.target.name === "Keywords") {

        if (!checkonlyletterandcharacter(e.target.value)) {
          errors["Keywords"] = "Only letter and character allowed";
        }
        else {
          errors["Keywords"] = "";
        }
        setState({ ...state, [e.target.name]: e.target.value, errors: errors });
      }

      else { setState({ ...state, [e.target.name]: e.target.value }); }
  }



  function checkemailid(e) {
    if (e.target.value !== "") {
      let errors = {};
      if (chkemailid) {
        errors["EmailID"] = "Email ID Already Exists";
        setState({ ...state, errors: errors });
      } else {
        errors["EmailID"] = "";
        setState({ ...state, errors: errors });
      }
    }
  }


  function checkemailid(e) {
    if (e !== "") {
      let errors = {};
      if (chkemailid) {
        return true;
      } else {
        return false;
      }
    }
  }


  async function checkemailidexists(eid) {
    if (eid !== "") {
      await checkEmailID({ ServiceID: 2, EmailID: eid })
        .then((response) => {
          if (response[0].length > 0) {
            if (response[0][0].result === "true") {
              setEmailID(true);
            } else {
              setEmailID(false);
            }
          }
          //return sname;
        })
        .catch((error) => {
          alert(error);
        });
    }
  }



  async function SaveData() {
    if (validate()) {
      await IU_Freejobalert(state)
        .then((response) => {
          //   alert("Data Saved Successfully");
          //   ResetState();
          //   setSmShow(false);
          //   bindData();
          // })
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
          }
          else {
            // alert("You Are Already Login...");
            let errors = {};
            errors["EmailID"] = "You Are Already Login...";
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

    await getFreejobalertDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      JobalertID: "0",
      Keywords: "",
      CityId: "",
      Workexpinyr: "",
      Workexpinmonth: "",
      Salaryinlakh: "",
      EmailID: "",
      Sendmerelatedjob: "",
      // CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
      erroes: []
    });
  }
  //   const [progress, setProgress] = useState();
  //   let percent = 0;
  //   const config = {
  //     onUploadProgress: (progressEvent) => {
  //     const {loaded, total} = progressEvent;
  //     percent = Math.round((100 * loaded) /total);//Math.floor((loaded * 100) / total)
  //     
  //     console.log( `${loaded}kb of ${total}kb | ${percent}%` ) // just to see whats happening in the console
  //     if(percent <= 100) {
  //       setProgress(percent) // hook to set the value of current level that needs to be passed to the progressbar
  //     }
  //     },
  //     headers: {

  //     // custom headers goes here
  //     }
  //     }
  //   async function handlechangepdf(e){
  //     setState({...state,[e.target.name]:getFileName(state.Title,e.target.files[0])});

  //       const formData = new FormData();
  //       formData.append("file", e.target.files[0],getFileName(state.Title,e.target.files[0]));
  //       await UploadAffilationPDF(formData,config).then(response=>{
  //         if(response.success){
  //           setTimeout(() => {
  //             alert("File Uploaded Successfully");
  //           }, 600);
  //           //alert("File Uploaded Successfully");
  //         }
  //         }) .catch((error) => {
  //         alert(error);
  //       });
  //   }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.Keywords) {
      IsValid = false;
      errors["Keywords"] = "Keywords is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.Keywords)) {
        IsValid = false;
        errors["Keywords"] = "Only letter and character allowed";
      }
    }

    if (!state.CityId) {
      IsValid = false;
      errors["CityId"] = "CityId is Required";
    }
    if (!state.Workexpinyr) {
      IsValid = false;
      errors["Workexpinyr"] = "Workexpinyr is Required";
    }

    if (!state.Workexpinmonth) {
      IsValid = false;
      errors["Workexpinmonth"] = "Workexpinmonth is Required";
    }
    if (!state.Salaryinlakh) {
      IsValid = false;
      errors["Salaryinlakh"] = "Salaryinlakh is Required";
    }
    else {
      if (!checksalary(state.Salaryinlakh)) {
        IsValid = false;
        errors["Salaryinlakh"] = "Only Two decimal allowed";
      }
    }

    // if (!state.EmailID) {
    //     IsValid = false;
    //     errors["EmailID"] = "EmailID is Required";
    //   }
    //   else{
    //     if (!checkemailidformat(state.EmailID)) {
    //       IsValid = false;
    //       errors["EmailID"] = "Only Valid EmailID allowed";
    //     }
    //   }
    if (!state.EmailID) {
      IsValid = false;
      errors["EmailID"] = "EmailID is Required";
    } else {
      if (!checkemail(state.EmailID)) {
        IsValid = false;
        errors["EmailID"] = "Only Valid EmailID allowed";
      } else {
        if (checkemailid(state.EmailID)) {
          IsValid = false;
          errors["EmailID"] = "Email already exists";
        }

      }
    }


    if (!state.Sendmerelatedjob) {
      IsValid = false;
      errors["Sendmerelatedjob"] = "Sendmerelatedjob is Required";
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
        <label className="form-label">Keywords</label>
        <input
          type="text"
          name="Keywords"
          onChange={handlechange}
          value={state.Keywords}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Keywords}</div>
        ) : (
          ""
        )}
      </div>

      <div>
        <label className="form-label">CityId</label>
        <input
          type="text"
          name="CityId"
          onChange={handlechange}
          value={state.CityId}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.CityId}</div>
        ) : (
          ""
        )}
      </div>

      <div>
        <label className="form-label">Workexpinyr</label>
        <input
          type="text"
          name="Workexpinyr"
          onChange={handlechange}
          value={state.Workexpinyr}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Workexpinyr}</div>
        ) : (
          ""
        )}
      </div>


      <div>
        <label className="form-label">Workexpinmonth</label>
        <input
          type="text"
          name="Workexpinmonth"
          onChange={handlechange}
          value={state.Workexpinmonth}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Workexpinmonth}</div>
        ) : (
          ""
        )}
      </div>

      <div>
        <label className="form-label">Salaryinlakh</label>
        <input
          type="text"
          name="Salaryinlakh"
          onChange={handlechange}
          value={state.Salaryinlakh}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Salaryinlakh}</div>
        ) : (
          ""
        )}
      </div>

      <div>
        <label className="form-label">EmailID</label>
        <input
          type="text"
          name="EmailID"
          onChange={handlechange}
          value={state.EmailID}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.EmailID}</div>
        ) : (
          ""
        )}
      </div>


      <div>
        <label className="form-label">Sendmerelatedjob</label>
        <input
          type="text"
          name="Sendmerelatedjob"
          onChange={handlechange}
          value={state.Sendmerelatedjob}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Sendmerelatedjob}</div>
        ) : (
          ""
        )}
      </div>


      {/* <div className="form-group">
            <label className="form-label">Upload File</label>
            <input
              type="file"
              name="Pdf"
              className="form-control"
              onChange={handlechangepdf}
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.Pdf}</div>
            ) : (
              ""
            )}
           
          </div>
           {progress && <ProgressBar now={progress} label={`${progress}%`} />} 
            */}
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

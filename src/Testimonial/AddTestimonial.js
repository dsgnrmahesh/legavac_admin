import React, { useEffect, useState } from "react";
import { IU_Testimonial, getTestimonialDetailByID, UploadTestimonialImage } from "../config/api";
import { getFileName } from "../config/constant";
import { checkonlyletterandcharacter, checkpdffile, checkimageformat, checkemail, checkindiamobile } from "../config/validate";
import { ProgressBar } from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddTestimonial({ setSmShow, editid, show, bindData }) {
  const [state, setState] = useState({
    TestimonialId: "0",
    TmName: "",
    EmailID: "",
    Mobile: "",
    Image: "",
    TmDescription: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
  });
  const [file, setFile] = useState();
  const [editorState, setEditorStage] = useState();
  const [redirect, setRedirect] = useState(false);
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
  function handleUpload(e) {
    setFile(e.target.files[0]);
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
      time =
        today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    setState({
      ...state,
      Image: "IMG" + date + time + "." + e.target.files[0].name.split(".")[1],
    });
  }

  async function SaveData() {
    if (validate()) {
      await IU_Testimonial(state)
        .then((response) => {
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href = "/testimonial";
          }
          else {
            // alert("This Testimonial Already exists...");
            let errors = {};
            errors["TmName"] = "This Testimonial Already exists...";
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

    await getTestimonialDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      TestimonialId: "0",
      TmName: "",
      EmailID: "",
      Mobile: "",
      Image: "",
      TmDescription: "",
      // CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
      erroes: []
      //erroes:[]
    });
    //setSmShow(false);
  }


  const [progress, setProgress] = useState();
  let percent = 0;
  const config = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      percent = Math.round((100 * loaded) / total);//Math.floor((loaded * 100) / total)

      console.log(`${loaded}kb of ${total}kb | ${percent}%`) // just to see whats happening in the console
      if (percent <= 100) {
        setProgress(percent) // hook to set the value of current level that needs to be passed to the progressbar
      }
    },
    headers: {
      // custom headers goes here
    }
  }


  async function handlechangepdf(e) {
    setState({ ...state, [e.target.name]: getFileName(state.TmName, e.target.files[0]) });

    const formData = new FormData();
    formData.append("file", e.target.files[0], getFileName(state.TmName, e.target.files[0]));
    await UploadTestimonialImage(formData, config).then(response => {
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

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.TmName) {
      IsValid = false;
      errors["TmName"] = "Title is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.TmName)) {
        IsValid = false;
        errors["TmName"] = "Only letter and character allowed";
      }
    }

    if (!state.EmailID) {
      IsValid = false;
      errors["EmailID"] = "EmailID is Required";
    }
    else {
      if (!checkemail(state.EmailID)) {
        IsValid = false;
        errors["EmailID"] = "Only Valid EmailID allowed";
      }
    }


    if (!state.Mobile) {
      IsValid = false;
      errors["Mobile"] = "Mobile Number is Required";
    }
    else {
      if (!checkindiamobile(state.Mobile)) {
        IsValid = false;
        errors["Mobile"] = "Only Valid Mobile Number allowed";
      }
    }


    if (!state.Image) {
      IsValid = false;
      errors["Image"] = "Image is Required";
    }


    if (!state.TmDescription) {
      IsValid = false;
      errors["TmDescription"] = "TmDescription is Required";
    }
    // else{
    //   if (!checkonlyletterandcharacter(state.TmDescription)) {
    //     IsValid = false;
    //     errors["TmDescription"] = "Only letter and character allowed";
    //   }
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
        <label className="form-label">Title</label>
        <input
          type="text"
          name="TmName"
          onChange={handlechange}
          value={state.TmName}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.TmName}</div>
        ) : (
          ""
        )}
      </div>

      <div className="form-group">
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

      <div className="form-group">
        <label className="form-label">Mobile Number</label>
        <input
          type="text"
          name="Mobile"
          onChange={handlechange}
          value={state.Mobile}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Mobile}</div>
        ) : (
          ""
        )}
      </div>

      <Col sm={12} md={12}>
        <div className="form-group">
          <label className="form-label">Description</label>
          <CKEditor
              editor={ClassicEditor}
              data={state.TmDescription}
              onBlur={(event, editor) => {
                setState({ ...state, TmDescription: editor.getData() });
              }}
            />
          {state.errors ? (
            <div className="invalid-feedback">{state.errors.TmDescription}</div>
          ) : (
            ""
          )}
        </div>
      </Col>


      <div className="form-group">
        <label className="form-label">Upload Image</label>
        <input
          type="file"
          name="Image"
          accept=".jpg,.jpeg"
          className="form-control"
          onChange={handlechangepdf}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Image}</div>
        ) : (
          ""
        )}
      </div>
      {progress && <ProgressBar now={progress} label={`${progress}%`} />}
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

import React, { useEffect, useState } from "react";
import { IU_Affilation, getAffilationDetailByID, UploadAffilationPDF, UploadArticleImage, UploadAffilationImage } from "../config/api";
import { getFileName } from "../config/constant";
import { checkonlyletterandcharacter, checkpdffile, checkimageformat, checkmobile, checkemail } from "../config/validate";
import { ProgressBar } from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

export default function AddAffilation({ setSmShow, editid, bindData }) {
  const [state, setState] = useState({
    AffilationID: "0",
    Title: "",
    Pdf: "",
    Image: "",
    // Description:EditorState.createEmpty(),
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
  });
  const [file, setFile] = useState();
  const [upFiles, setUpFiles] = useState();
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
  //setState({ ...state, [e.target.name]: e.target.value,errors: {...state.errors,[e.target.name]:""}});

  async function SaveData() {

    let errors = {};
    if (validate()) {

      await IU_Affilation(state)

        .then((response) => {
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href = "/affilations";
          }
          else {
            // alert("This Affilation Already exists...");

            errors["Title"] = "This Affilation Already exists...";

          }
          setState({
            ...state,
            errors: errors,
          });
        })

        .catch((error) => {
          alert(error);
        });
      //     console.log(response.data);
      // });
    }
  }
  async function UpdateData(id) {

    await getAffilationDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      AffilationID: "0",
      Title: "",
      Pdf: "",
      Image: "",
      //Description:EditorState.createEmpty(),
      //  CreatedBy: "0",
      CreatedBy: sessionStorage.getItem("UserID"),
      erroes: []
    });
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
    setState({ ...state, [e.target.name]: getFileName(state.Title, e.target.files[0]) });

    const formData = new FormData();
    formData.append("file", e.target.files[0], getFileName(state.Title, e.target.files[0]));
    await UploadAffilationPDF(formData, config).then(response => {
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

  const [progressimage, setProgressimage] = useState();
  let percentimage = 0;
  const configimage = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      percentimage = Math.round((100 * loaded) / total);//Math.floor((loaded * 100) / total)

      console.log(`${loaded}kb of ${total}kb | ${percentimage}%`) // just to see whats happening in the console
      if (percentimage <= 100) {
        setProgressimage(percentimage) // hook to set the value of current level that needs to be passed to the progressbar
      }
    },
    headers: {
      // custom headers goes here
    }
  }


  async function handlechangeimage(e) {
    setState({ ...state, [e.target.name]: getFileName(state.Title, e.target.files[0]) });

    const formData = new FormData();
    formData.append("file", e.target.files[0], getFileName(state.Title, e.target.files[0]));
    await UploadAffilationImage(formData, configimage).then(response => {
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


    if (!state.Title) {
      IsValid = false;
      errors["Title"] = "Title is Required";
    }
    else {
      if (!checkonlyletterandcharacter(state.Title)) {
        IsValid = false;
        errors["Title"] = "Only letter and character allowed";
      }
    }

    if (!state.Pdf) {
      IsValid = false;
      errors["Pdf"] = "Pdf is Required";
    }
    // else{
    //   if (!checkpdffile(state.Pdf)) {
    //     IsValid = false;
    //     errors["Pdf"] = "Only .pdf allowed";
    //   }
    // }

    if (!state.Image) {
      IsValid = false;
      errors["Image"] = "Image is Required";
    }
    // else{
    //   if (!checkimageformat(state.Image)) {
    //     IsValid = false;
    //     errors["Image"] = "Only .jpg ,.jpeg allowed";
    //   }
    // }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  //   const onEditorStateChange = (editorState) => {
  //     setEditorStage(editorState);
  //     setState({...state,Description:editorState.getCurrentContent().getPlainText()});
  //   };
  // if(redirect){
  //   //window.location.href="/posted-jobs";
  // }






  return (
    <>

      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="Title"
          onChange={handlechange}
          value={state.Title}
          className="form-control"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Title}</div>
        ) : (
          ""
        )}
      </div>

      <div className="form-group">
        <label className="form-label">Upload PDF Document</label>
        <input
          type="file"
          name="Pdf"
          className="form-control"
          onChange={handlechangepdf}
          // onChange={handlechangedoc}
          accept=".pdf"
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Pdf}</div>
        ) : (
          ""
        )}

      </div>
      {progress && <ProgressBar now={progress} label={`${progress}%`} />}

      <div className="form-group">
        <label className="form-label">Upload Image</label>
        <input
          type="file"
          name="Image"
          className="form-control"
          onChange={handlechangeimage}
          accept=".jpg,.jpeg,.png"
        // onChange={handlechangedoc}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Image}</div>
        ) : (
          ""
        )}
      </div>
      {progressimage && <ProgressBar now={progressimage} label={`${progressimage}%`} />}


      {/* <Col sm={12} md={10}>
          <div className="form-group">
            <label className="form-label">Description</label>
            <Editor
              EditorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
            {state.errors ? (
                    <div className="invalid-feedback">{state.errors.Description}</div>
                  ) : (
                    ""
                  )}
          </div>
        </Col> */}


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

import React, { useEffect, useState } from "react";
import { IU_CareerOrAdvice, getCareerOrAdviceDetailByID, UploadCareerAdviceVideo, UploadCareerAdviceVideoImage } from "../config/api";
import { checkonlyletterandcharacter, checkpdffile, checkimageformat, checkmobile, checkemail } from "../config/validate";
import { getFileName } from "../config/constant";
import { ProgressBar } from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";


export default function AddCareerOrAdvice({ setSmShow, editid, bindData }) {
  const [state, setState] = useState({
    Caid: "0",
    Title: "",
    VideoImage: "",
    Video: "",
    // Description:EditorState.createEmpty(),
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],
    //Caid  ,Title  ,Video  , CreatedBy
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
  async function SaveData() {
    //console.log(state);
    if (validate()) {
      await IU_CareerOrAdvice(state)
        .then((response) => {
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href = "/careers-or-advice";
          }
          else {
            // alert("This Carrer Advice  Name Already exists...");
            let errors = {};
            errors["Title"] = "This Carrer Advice Title Already exists...";
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

    await getCareerOrAdviceDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      Caid: "0",
      Title: "",
      VideoImage: "",
      Video: "",
      CreatedBy: sessionStorage.getItem("UserID"),
      erroes: []
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


  async function handlechangevideo(e) {
    setState({ ...state, [e.target.name]: getFileName(state.Title, e.target.files[0]) });

    const formData = new FormData();
    formData.append("file", e.target.files[0], getFileName(state.Title, e.target.files[0]));
    await UploadCareerAdviceVideo(formData, config).then(response => {
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
  const [progressvideoimage, setProgressvideoimage] = useState();
  let percentvideoimage = 0;
  const configvideoimage = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      percentvideoimage = Math.round((100 * loaded) / total);//Math.floor((loaded * 100) / total)

      console.log(`${loaded}kb of ${total}kb | ${percentvideoimage}%`) // just to see whats happening in the console
      if (percentvideoimage <= 100) {
        setProgressvideoimage(percentvideoimage) // hook to set the value of current level that needs to be passed to the progressbar
      }
    },
    headers: {
      // custom headers goes here
    }
  }
  async function handlechangevideoimage(e) {
    setState({ ...state, [e.target.name]: getFileName(state.Title, e.target.files[0]) });

    const formData = new FormData();
    formData.append("file", e.target.files[0], getFileName(state.Title, e.target.files[0]));
    await UploadCareerAdviceVideoImage(formData, configvideoimage).then(response => {
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

    if (!state.Video) {
      IsValid = false;
      errors["Video"] = "Video is Required";
    }
    if (!state.VideoImage) {
      IsValid = false;
      errors["VideoImage"] = "Video Image is Required";
    }


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
        <label className="form-label">Upload Video Image</label>
        <input
          type="file"
          name="VideoImage"
          accept=".jpg,.jpeg"
          className="form-control"
          onChange={handlechangevideoimage}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.VideoImage}</div>
        ) : (
          ""
        )}
      </div>
      {progressvideoimage && <ProgressBar now={progressvideoimage} label={`${progressvideoimage}%`} />}
      <div className="form-group">
        <label className="form-label">Upload Video</label>
        <input
          type="file"
          accept=".mp4"
          name="Video"
          className="form-control"
          onChange={handlechangevideo}
        />
        {state.errors ? (
          <div className="invalid-feedback">{state.errors.Video}</div>
        ) : (
          ""
        )}
      </div>
      {progress && <ProgressBar now={progress} label={`${progress}%`} />}
      {/*           
          <Col sm={12} md={10}>
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

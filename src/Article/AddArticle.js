import React, { useEffect, useState } from "react";
import { IU_Article, getArticleDetailByID, UploadArticleImage, UploadArticlePDF, UploadArticleVideo, UploadArticleVideoImage } from "../config/api";
import { checkonlyletterandcharacter } from "../config/validate";
import { getFileName } from "../config/constant";
import { ProgressBar, Row } from 'react-bootstrap';
import { Col } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddArticle({ setSmShow, editid, bindData }) {
  const [state, setState] = useState({
    ArticleID: "0",
    Title: "",
    Pdf: "",
    Description: "",
    Image: "",
    VideoImage: "",
    Video: "",
    CreatedBy: sessionStorage.getItem("UserID"),
    errors: [],

    //ArticleID,Title,Pdf,Description,Image,Video,CreatedBy
  });

  // const [eState, setEditorStage] = useState({
  //   editorState:EditorState.createEmpty(),
  // });
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
    //const { editorState } = eState;
    //setEditorStage({editorState: EditorState. createWithContent(convertFromHTML("<p><strong>description </strong>tested</p>")});
  }, [id]);

  function handlechange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  const handleChangeE = (rawDraftContentState) => {
    // no need for convertToRaw or stateToHtml anymore
    console.log(rawDraftContentState)
  }
  async function SaveData() {
    //console.log(state);
    if (validate()) {
      await IU_Article(state)
        .then((response) => {
          if (response[0][0].ID !== 'exists') {
            //setModalShow(false);
            setSmShow(false);
            alert("Data Saved Successfully");
            ResetState();
            window.location.href = "/articles";
          }
          else {
            // alert("This Article Already exists...");
            let errors = {};
            errors["Title"] = "This Article Already exists...";
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
  // var EditorState = Draft.EditorState;
  // var ContentState = Draft.ContentState;
  async function UpdateData(id) {
    await getArticleDetailByID(id)
      .then((response) => {
        setState({
          ...state,
          ArticleID: response[0][0].ArticleID,
          Title: response[0][0].Title,
          Pdf: response[0][0].Pdf,
          Description: response[0][0].Description,
          Image: response[0][0].Image,
          VideoImage: response[0][0].VideoImage,
          Video: response[0][0].Video,
          CreatedBy: sessionStorage.getItem("UserID"),
          erroes: []
        });
        //setEditorStage(response[0][0].Description);
        //convertContentToHTML();

      })
      .catch((error) => {
        alert(error);
      });
  }
  async function ResetState() {
    setState({
      ArticleID: "0",
      Title: "",
      Pdf: "",
      Description: "",
      Image: "",
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

  async function handlechangepdf(e) {
    setState({ ...state, [e.target.name]: getFileName(state.Title, e.target.files[0]) });

    const formData = new FormData();
    formData.append("file", e.target.files[0], getFileName(state.Title, e.target.files[0]));
    await UploadArticlePDF(formData, config).then(response => {
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
    await UploadArticleImage(formData, configimage).then(response => {
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
    await UploadArticleVideoImage(formData, configvideoimage).then(response => {
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



  const [progressvideo, setProgressvideo] = useState();
  let percentvideo = 0;
  const configvideo = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      percentvideo = Math.round((100 * loaded) / total);//Math.floor((loaded * 100) / total)

      console.log(`${loaded}kb of ${total}kb | ${percentvideo}%`) // just to see whats happening in the console
      if (percentvideo <= 100) {
        setProgressvideo(percentvideo) // hook to set the value of current level that needs to be passed to the progressbar
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
    await UploadArticleVideo(formData, configvideo).then(response => {
      //alert(response.success);
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

    // if (!state.Pdf) {
    //   IsValid = false;
    //   errors["Pdf"] = "Pdf is Required";
    // }
    // else{
    //   if (!checkpdffile(state.Pdf)) {
    //     IsValid = false;
    //     errors["Pdf"] = "Only .pdf allowed";
    //   }
    // }

    if (!state.Description) {
      IsValid = false;
      errors["Description"] = "Description is Required";
    }
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

    // if (!state.Video) {
    //   IsValid = false;
    //   errors["Video"] = "Video is Required";
    // }

    //  if (!state.VideoImage) {
    //   IsValid = false;
    //   errors["VideoImage"] = "Video Image is Required";
    // }
    // else{
    //   if (!checkimageformat(state.Image)) {
    //     IsValid = false;
    //     errors["VideoImage"] = "Only .jpg ,.jpeg allowed";
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
      <Row>
        <Col sm={12} md={12}>
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
        </Col>
        {/* <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              type="text"
              name="Description"
              onChange={handlechange}
              value={state.Description}
              className="form-control"
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.Description}</div>
            ) : (
              ""
            )}
          </div> */}


        <Col sm={12} md={12}>
          <div className="form-group">
            <label className="form-label">Description</label>
            <CKEditor
              editor={ClassicEditor}
              data={state.Description}
              onBlur={(event, editor) => {
                setState({ ...state, Description: editor.getData() });
              }}
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.Description}</div>
            ) : (
              ""
            )}
          </div>
        </Col>

        <Col sm={12} md={6}>
          <div className="form-group">
            <label className="form-label">Upload Pdf Document</label>
            <input
              type="file"
              name="Pdf"
              accept=".pdf"
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
        </Col>

        <Col sm={12} md={6}>
          <div className="form-group">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              name="Image"
              accept=".jpg,.jpeg"
              className="form-control"
              onChange={handlechangeimage}
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.Image}</div>
            ) : (
              ""
            )}
          </div>
          {progressimage && <ProgressBar now={progressimage} label={`${progressimage}%`} />}
        </Col>

        <Col sm={12} md={6}>
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
        </Col>

        <Col sm={12} md={6}>
          <div className="form-group">
            <label className="form-label">Upload Video</label>
            <input
              type="file"
              name="Video"
              accept=".mp4"
              className="form-control"
              onChange={handlechangevideo}
            />
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.Video}</div>
            ) : (
              ""
            )}
          </div>
          {progressvideo && <ProgressBar now={progressvideo} label={`${progressvideo}%`} />}
        </Col>

        <Col sm={12} md={12}>
          <div className="d-flex justify-content-end">
            <button onClick={ResetState} className="btn orrange me-2">
              Reset
            </button>
            <button onClick={SaveData} className="btn indigo">
              Submit
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

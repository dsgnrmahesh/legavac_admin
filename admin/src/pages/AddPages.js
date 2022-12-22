import React, { useEffect, useState } from "react";
import { IU_Page, getLPageDetailByID } from "../config/api";

export default function AddPage(props) {
  const [state, setState] = useState({
    PageID: "0",
    Pagename: "",
    Title: "",
    Description: "",
    //CreatedBy: "0",
    CreatedBy:sessionStorage.getItem("UserID"),
    errors: [],
  });

  const {
    match: { params },
  } = props;
  const { id } = params;

  useEffect(() => {
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
      await IU_Page(state)
        .then((response) => {
          alert(response[0][0].ID);
          ResetState();
        })
        .catch((error) => {
          alert(error);
        });
      //     console.log(response.data);
      // });
    }
  }
  async function UpdateData(id) {
    await getLPageDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      PageID: "0",
      Pagename: "",
      Title: "",
      Description: "",
      CreatedBy: "0",
    });
  }

  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.Pagename) {
      IsValid = false;
      errors["Pagename"] = "Pagename is Required";
    }

    if (!state.Title) {
      IsValid = false;
      errors["Title"] = "Title is Required";
    }
    if (!state.Description) {
      IsValid = false;
      errors["Description"] = "Description is Required";
    }
    // if (!state.SelectPageName) {
    //   IsValid = false;
    //   errors["SelectPageName"] = "SelectPageName is Required";
    // }
    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  return (
    <div>
      Select Page:
      <select name="SelectPageName">
        <option value="0">Select</option>
        <option value="aboutus">About Us</option>
        <option value="contactus">Contact Us</option>
        <option value="termandcondition">Term And Condition</option>
        <option value="privacyandpolicy">Privacy And Policy</option>
      </select>
      <br />
      {state.errors ? (
        <div className="errorMsg">{state.errors.SelectPageName}</div>
      ) : (
        ""
      )}
      PageName:
      <input
        type="text"
        name="Pagename"
        onChange={handlechange}
        value={state.Pagename}
      />
      <br />
      {state.errors ? (
        <div className="errorMsg">{state.errors.Pagename}</div>
      ) : (
        ""
      )}
      Title:
      <input
        type="text"
        name="Title"
        onChange={handlechange}
        value={state.Title}
      />
      <br />
      {state.errors ? <div className="errorMsg">{state.errors.Title}</div> : ""}
      Description:
      <input
        type="text"
        name="Description"
        onChange={handlechange}
        value={state.Description}
      />
      <br />
      {state.errors ? (
        <div className="errorMsg">{state.errors.Description}</div>
      ) : (
        ""
      )}
      <button onClick={SaveData}>Submit</button>
      <br />
      <button onclick={ResetState}>Reset</button>
    </div>
  );
}

// const [state,setState]=useState({
//     PageID:"0",
//     CreatedBy:"0"
// })
// const [city,setCityDDL]=useState([]);
// useEffect(() => {
//     BindPageDDL()
// }, [])
// useEffect(()=>{
//     BindPageDDL();
// },[])
// function handlechange(e){
//     setState({...state,[e.target.name]:[e.target.value]})
// }
// async function SaveData(){
//     console.log(state);
//     await IU_Page(state).then(response=>{
//         console.log(response.data);
//     });
// }
// async function BindPageDDL(){
//     const pageddl = await getPageForDDL();
//     if(pageddl.error)
//         console.log(pageddl.error);
//     else
//         console.log(pageddl.data);
//         setPageDDL(pageddl.data);
// }

import React, { useEffect, useState } from "react";
import { IU_Faq, getFaqDetailByID } from "../config/api";
export default function AddFaq(props) {
  const [state, setState] = useState({
    FaqID: "0",
    Question: "",
    Answer: "",
   CreatedBy:sessionStorage.getItem("UserID"),
   errors: [],
    //FaqID   ,Question  ,Answer  , CreatedBy
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
    setState({ ...state, [e.target.name]: [e.target.value] });
  }
  async function SaveData() {
    //console.log(state);
    if (validate()) {
      await IU_Faq(state)
        .then((response) => {
          alert(response[0][0].ID);
          ResetState();
        })
      //   if(response[0][0].ID!=='exists'){
      //     //setModalShow(false);
      //     setSmShow(false);
      //     alert("Data Saved Successfully");
      //     ResetState();
      //   }
      //   else{
      //    // alert("This Question Already exists...");
    //   let errors = {};
    //   errors["Question"] = "This Question Already exists...";
    //   setState({
    //    ...state,
    //    errors: errors,
    //  });

      //   }
      // })
        .catch((error) => {
          alert(error);
        });
      //     console.log(response.data);
      // });
    }
  }
  async function UpdateData(id) {
    await getFaqDetailByID(id)
      .then((response) => {
        setState(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function ResetState() {
    setState({
      FaqID: "0",
      Question: "",
      Answer: "",
    //  CreatedBy: "0",
    CreatedBy:sessionStorage.getItem("UserID"),
    });
  }
  function validate() {
    let errors = {};
    let IsValid = true;

    if (!state.Question) {
      IsValid = false;
      errors["Question"] = "Question is Required";
    }

    if (!state.Answer) {
      IsValid = false;
      errors["Answer"] = "Answer is Required";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }

  return (
    <div>
      Question:
      <input
        type="text"
        name="Question"
        onChange={handlechange}
        value={state.Question}
      />
      <br />
      {state.errors ? (
        <div className="errorMsg">{state.errors.Question}</div>
      ) : (
        ""
      )}
      Answer:
      <input
        type="text"
        name="Answer"
        onChange={handlechange}
        value={state.Answer}
      />
      <br />
      {state.errors ? (
        <div className="errorMsg">{state.errors.Answer}</div>
      ) : (
        ""
      )}
      <button onClick={SaveData}>Submit</button>
      <br />
      <button onClick={ResetState}>Reset</button>
    </div>
  );
}

import React, { useState } from "react";
import AppForm, { FormGroup } from "../component/AppForm";
export default function Serviceform() {
  const data = [
    {
      SectionTitle: "Service Name",
      Fields: [
        {
          name: "name",
          label: "Name",
          required: true,
          datatype: "Integer",
          htmlelement: "textbox",
        },
        {
          name: "email",
          label: "Email",
          required: true,
          datatype: "String",
          htmlelement: "email",
          placeholder: "",
        },
        {
          name: "phone",
          label: "Phone",
          required: true,
          datatype: "Number",
          htmlelement: "textbox",
        },
        {
          name: "age",
          label: "Age",
          hidden: false,
          options: [],
          required: true,
          datatype: "number",
          htmlelement: "number",
        },
        {
          name: "photo",
          label: "Photo",
          hidden: false,
          options: [],
          required: true,
          datatype: "Image",
          htmlelement: "file",
        },
        {
          name: "country",
          label: "Country",
          hidden: false,
          options: ["aaa", "bbb", "ccc"],
          required: true,
          datatype: "select",
          htmlelement: "select",
        },
      ],
    },
  ];
  const [state, setState] = useState();
  function handlechange(e) {
    e.preventDefault();

    setState({ ...state, [e.target.name]: e.target.value });
  }
  function savedata(e) {
    e.preventDefault();
    //console.log(state);
  }
  var listItems = data.map((item, index) => {
    {
      item.Fields.map((c, index) => {
        return (
          <FormGroup
            label={c.label}
            type={c.htmlelement}
            placeholder={c.placeholder}
            onChange={handlechange}
            name={c.name}
            id={c.name}
          />
        );
      });
    }
  });
  return (
    <div>
      <AppForm rowAlign="justify-content-center">
        <FormGroup
          label="Name1"
          type="textbox"
          placeholder="Name1"
          onChange={handlechange}
          name="Name1"
          id="name1"
        />
        {listItems}
      </AppForm>
    </div>
  );
}

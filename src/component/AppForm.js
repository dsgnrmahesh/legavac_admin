import React, { useState } from 'react';
import { Row } from "react-bootstrap";
//import data from "../component/data.json";

// const data=[{
//     "forms":{
//         "sections":{
//             "order":1,
//             "SectionTitle":"Service Name",
//             "Fields":[
//                 {
//                     "name":"name",
//                     "label":"Name",
//                     "required":true,
//                     "datatype":"Integer",
//                     "htmlelement":"textbox"
//                 },
//                 {
//                     "name":"email",
//                     "label":"Email",
//                     "required":true,
//                     "datatype":"String",
//                     "htmlelement":"email",
//                     "placeholder":""
//                 },
//                 {
//                     "name":"phone",
//                     "label":"Phone",
//                     "required":true,
//                     "datatype":"Number",
//                     "htmlelement":"textbox"
//                 },
//                 {
//                     "name":"age",
//                     "label":"Age",
//                     "hidden":false,
//                     "options":[],
//                     "required":true,
//                     "datatype":"number",
//                     "htmlelement":"number"
//                 },
//                 {
//                     "name":"photo",
//                     "label":"Photo",
//                     "hidden":false,
//                     "options":[],
//                     "required":true,
//                     "datatype":"Image",
//                     "htmlelement":"file"
//                 },
//                 {
//                     "name":"country",
//                     "label":"Country",
//                     "hidden":false,
//                     "options":["aaa","bbb","ccc"],
//                     "required":true,
//                     "datatype":"select",
//                     "htmlelement":"select"
//                 }
//             ]
//         }
//     }
// }];

export function FormGroup({label,
    type,
    placeholder,
    onchange,
    name,
    value, 
    id}){
//     const [state,setState]=useState();
//     function handlechange(e){
//     e.preventDefault();

//     setState({...state,[e.target.name]:e.target.value});
// }
// function savedata(e){
//     e.preventDefault();
//     console.log(state);
// }
    
    return( <div className="form-group">                 
    {console.log(label)}
        { type === "textbox"?
                        (<input type="text" onChange={onchange} name={name} />)
        :type === "select"?
                        (<select name={name} onChange={onchange}>
                                    <option value="0">Select</option>
                                    {value.map((item,index)=>
                                    <option value={index}>{item}</option>
                                    )}
                                </select>)
        :type ==="file"?
                        (<input type="file" onChange={onchange} name={name}  />)
        :type ==="email"?
                        (<input type="text" onChange={onchange} name={name}  />)
        :type ==="number"?
                        (<input type="number" onChange={onchange} name={name} />)
        :"Hi"}
        </div>
    )
}
export default function AppForm({ rowAlign, children }) {
    return (
      <div className="form-body">
        <div className="form-content">
          <Row className={rowAlign}>{children}</Row>
        </div>
      </div>
    );
  }
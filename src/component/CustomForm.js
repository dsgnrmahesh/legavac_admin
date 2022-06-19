import React from 'react';
import {Input, Label, FormGroup, FormText, FormFeedback, Row, Col} from 'reactstrap';



//for a select input type
const renderOptions=(options)=>{
    return options.map((child)=>{
        return(
            <option key={child.value} value={child.value}>{child.label}</option>
        );
    });
};





export default function CustomForm({ template, data, handleform}) {
let {register,errors} = handleform;
const renderFields = (fields) => {

        return fields.map(field => {
            let { type, title, name, required,validation} = field;


switch(type){
      case 'text':
    return (
        <FormGroup key={name}>
         <Label htmlFor={name}>
                  {title}
                  <span style={required?{color:'red'}:{}}>*</span> 
                 </Label>
                 <Input             
                  type='text'
                  name={name}                        
                  innerRef= 
               {register({required:required,validate:validation})}
                  />                             
                  {errors[name] && 
                  <FormFeedback>
                   {errors[name].message} 
                 </FormFeedback>}                   
              </FormGroup>
    );

     case 'select':
    let {options}=field;
    return (
      <FormGroup key={name}>
        <Label htmlFor={name}>{title}<span style={required?{color:'red'}:{}}>*</span></Label>
        <Input  
             type='select' 
             name={name} 
             innerRef={register}
        >

            {renderOptions(options)}
        </Input>
          </FormGroup>
    );

      default:
       return (
        <div>
          <span>Invalid Field</span>
               </div>
    );
      }
   });

};
let { title, Fields } = template;
    return (
        <>
            <h4>{title}</h4>
            <Row>
                <Col>
                    {renderFields(Fields)}
                </Col>
            </Row>
        </>

    );

}

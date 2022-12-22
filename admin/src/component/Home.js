import React, { useState, useEffect } from "react";

// import { apiTasks } from "../services/api/apicore";
import constname from "../config/sp";
import { login } from "../config/api";
import CustomForm from "../component/CustomForm";
import { Card, CardBody, Form, Button, Row } from "reactstrap";

export default function Home() {
  const [setState, state] = useState([]);
  useEffect(() => {
    // apinew.getProperty()
    // .then(resp => console.log(resp))
    //         .catch(err => console.log(err));
    // api.getAll("getProperty").then(resp => console.log(resp))
    //   .catch(err => console.log(err));
    // setState(d);
    //_getTasks();

    getdata();
  }, []);
  async function getdata() {
    const user = await login();
    if (user.error) console.log(user.error);
    else console.log(user.data);
  }

  // function _getTasks() {
  //
  //   console.log(constname.getproperty);
  //   apiTasks.getAll(constname.getproperty).then((res) => {
  //     let arr = _parseTasks(res);
  //     console.log(arr);

  //     //setTasks(arr);
  //   });
  // }
  // function _parseTasks(tasks) {
  //   return tasks.map((task) => {
  //     // Parse task information
  //     return task;
  //   });
  // }

  function template() {}
  function handleSubmit(e) {}
  function register() {}
  function errors() {}
  function onSubmit() {}

  //const template=data;

  let handleform = {
    register: register,
    errors: errors,
  };
  return (
    <Card>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="d-flex justify-content-end">
            <Button type="submit" className="mt-0 mr-1" color="primary">
              Save Changes
            </Button>
            <CustomForm template={template} handleform={handleform} />
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}

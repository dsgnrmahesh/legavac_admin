import React, { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";

import ManageCourse from "../Course/ManageCourse";
import AddCourse from "../Course/AddCourse";

import ManageSpecialization from "../Course/ManageSpecialization";
import AddSpecialization from "../Course/AddSpecialization";

import ManageEducation from "../Education/ManageEducation";
import AddEducation from "../Education/AddEducation";

import AddSkill from "../Skill/AddSkill";
import ManageSkill from "../Skill/ManageSkill";

export default function EducationMaster() {
  const [smShow, setSmShow] = useState(false);
  const [mode, setMode] = useState("Add");
  const [editID, setEditID] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const handleAddNew = (e) => {
    setModalTitle(e.target.dataset.name);
    setSmShow(true);
    setEditID(0);
    setMode("Add");
  };
  const handleEdit = (e) => {
    setModalTitle(e.target.dataset.name);
    setEditID(e.target.dataset.id);
    setSmShow(true);
    setMode("Edit");
  };
  return (
    <>
      <Row className="mx-0">
        <Col sm={12} md={12} lg={12} className="px-0">
          <div className="contentScroll">
            <div className="contentHeader d-flex align-items-center">
              <div className="px-4 w-100">
                <h3 className="contentTitle fs-23 px-0">Education Masters</h3>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Education Masters
                  </li>
                </ol>
              </div>
            </div>
            <div
              className="contentBody px-4 pt-4"
              style={{ backgroundColor: "#f6f7f9" }}
            >
              <Row>               
                <ManageEducation
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                 <ManageCourse
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                <ManageSpecialization
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                <ManageSkill
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode} {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalTitle === "course" ? (
            <AddCourse setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}

          {modalTitle === "specialization" ? (
            <AddSpecialization setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
          {modalTitle === "education" ? (
            <AddEducation setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
          {modalTitle === "skill" ? (
            <AddSkill setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

import React, { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";

import AddCountry from "../Location/AddCountry";
import ManageCountry from "../Location/ManageCountry";

import AddState from "../Location/AddState";
import ManageState from "../Location/ManageState";

import AddCity from "../Location/AddCity";
import ManageCity from "../Location/ManageCity";

import AddDistrict from "../Location/AddDistrict";
import ManageDistrict from "../Location/ManageDistrict";

import AddTaluka from "../Location/AddTaluka";
import ManageTaluka from "../Location/ManageTaluka";

export default function LocationMaster() {
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
                <h3 className="contentTitle fs-23 px-0">Location Masters</h3>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Location Masters
                  </li>
                </ol>
              </div>
            </div>
            <div
              className="contentBody px-4 pt-4"
              style={{ backgroundColor: "#f6f7f9" }}
            >
              <Row>
                <ManageCountry
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                <ManageState
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                <ManageCity
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                <ManageDistrict
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                <ManageTaluka
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
          {modalTitle === "country" ? (
            <AddCountry setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
          {modalTitle === "state" ? (
            <AddState setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
          {modalTitle === "district" ? (
            <AddCity setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
          {modalTitle === "taluka" ? (
            <AddDistrict setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
          {modalTitle === "city" ? (
            <AddTaluka setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

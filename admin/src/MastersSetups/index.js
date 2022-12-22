import React, { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import ManageCommunity from "../Community/ManageCommunity";
import AddCommunity from "../Community/AddCommunity";

import ManageJobtitle from "../Job/ManageJobtitle";
import AddJobTitle from "../Job/AddJobTitle";
import AddSubjobtitle from "../Job/AddSubJobTitle";
import ManageSubjobtitle from "../Job/ManageSubjobtitle";

import ManageMembershipplanfeature from "../Membership/ManageMembershipplanfeature";
import AddMembershipPlanFeature from "../Membership/AddMembershipPlanFeature";
import ManageCompany from "../Company/ManageCompany";
import AddCompany from "../Company/AddCompany";

export default function MastersSetups() {
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
                <h3 className="contentTitle fs-23 px-0">Masters Setups</h3>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Masters Setups
                  </li>
                </ol>
              </div>
            </div>
            <div
              className="contentBody px-4 pt-4"
              style={{ backgroundColor: "#f6f7f9" }}
            >
              <Row>
                {/* <ManageCommunity
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                /> */}

                <ManageJobtitle
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                <ManageSubjobtitle
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />

                   <ManageMembershipplanfeature
                  handleAddNew={handleAddNew}
                  handleEdit={handleEdit}
                />
                <ManageCompany
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
          {modalTitle === "community" ? (
            <AddCommunity setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}

          {modalTitle === "job title" ? (
            <AddJobTitle setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
          {modalTitle === "sub job title" ? (
            <AddSubjobtitle setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}

            {modalTitle === "membershipplanfeature" ? (
            <AddMembershipPlanFeature setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}
          {modalTitle === "company" ? (
            <AddCompany setSmShow={setSmShow} editID={editID} />
          ) : (
            ""
          )}

        </Modal.Body>
      </Modal>
    </>
  );
}

import React from "react";
import { Col, Row } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";

const AddCompany = () => {
  return (
    <>
      <Row>
        <Col sm={12} md={12} lg={12} className="px-0">
          <div className="contentScroll">
            <div className="contentHeader d-flex align-items-center">
              <div className="px-4 w-100">
                <h3 className="contentTitle fs-23 px-0">Add Company</h3>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/dashboard-ctc">View Companies</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add Company
                  </li>
                </ol>
              </div>
            </div>
            <div className="contentBody py-4 px-5">
              <Row>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <CreatableSelect
                      name="CompanyName"
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Contact Person Name</label>
                    <input
                      type="text"
                      name="PersonName"
                      className="form-control"
                    />
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="text"
                      name="ContactNumber"
                      className="form-control"
                    />
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="form-group">
                    <label className="form-label">Date</label>
                    <input type="date" name="Date" className="form-control" />
                  </div>
                </Col>
                <Col xs={12} md={8} lg={8}>
                  <div className="form-group">
                    <label className="form-label">Remark</label>
                    <textarea className="form-control" placeholder="Remark" />
                  </div>
                </Col>
                <Col sm={12} md={12}>
                  <div className="d-flex justify-content-center mt-3">
                    <button className="btn orrange me-2">Reset</button>
                    <button className="btn indigo">Submit</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AddCompany;

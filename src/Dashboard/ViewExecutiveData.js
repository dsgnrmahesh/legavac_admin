import { mdiEyeOutline, mdiPencilOutline, mdiPlus, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../Commons/Table";
import { deleteExecutiveData, getCTCDashboardDetail, getExecutiveData, getExecutiveDataByExecutiveID } from "../config/api";

export default function ExecutiveData() {
  const [data, setData] = useState([]);
  const [data_, setData_] = useState([]);
  const [smShow, setSmShow] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("UserID") === 1 || sessionStorage.getItem("UserID") === '1') {
      bindData();
    } else {
      bindDatabyid(sessionStorage.getItem("UserID"));
    }
  });
  async function bindData() {
    await getExecutiveData(sessionStorage.getItem("UserID"))
      .then((response) => {
        if (response[0].length > 0) {
          setData(response[0]);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function bindDatabyid(id) {
    debugger;
    await getExecutiveDataByExecutiveID(id)
      .then((response) => {
        if (response[0].length > 0) {
          setData_(response[0]);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  const update = (e) => {
    console.log(e);
  };
  async function DeleteData(id,executiveid) {
    debugger;
    if (window.confirm('Are you sure delete data?')) {
      await deleteExecutiveData(id)
        .then((response) => {
          alert("Data Deleted Successfully");
          bindData();
          bindDatabyid(executiveid);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  const columns = useMemo(
    () => [
      {
        Header: "Executive Name",
        accessor: "executive_name",
      },
      {
        Header: "Contact Person Name",
        accessor: "contact_person_name",
      },
      {
        Header: "Contact Number",
        accessor: "contact_no",
      },
      {
        Header: "Total Count",
        accessor: "total_count",
      },
      {
        Header: "Action",
        id: "ID",
        Cell: ({ row }) => {
          return (
            <div className="actionColumn">
              {/* <button className="del" onClick={() => DeleteData(row.original.ExecutiveID)}>
                <Icon path={mdiTrashCanOutline} />
              </button> */}
              <button className="view" onClick={() => { setSmShow(true); bindDatabyid(row.original.ExecutiveID) }}>
                <Icon path={mdiEyeOutline} />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );
  const columns_ = useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "company_name",
      },
      {
        Header: "Contact Person Name",
        accessor: "contact_person_name",
      },
      {
        Header: "Contact Number",
        accessor: "contact_no",
      },
      {
        Header: "Date Of Meeting",
        accessor: "date",
      },
      {
        Header: "Remark",
        accessor: "remark",
      },
      {
        Header: "Action",
        id: "ID",
        Cell: ({ row }) => {
          return (
            <div className="actionColumn">
              {/* <button className="edit" onClick={DeleteData(row.original.ID)}>
                <Icon path={mdiPencilOutline} />
              </button> */}
              {<button className="del" onClick={() => DeleteData(row.original.ExeDataID,row.original.ExecutiveID)}>
                <Icon path={mdiTrashCanOutline} />
              </button>}
              {/* <button className="view" onClick={() => {setSmShow(true);bindDatabyid(row.original.ExecutiveID)}}>
                <Icon path={mdiEyeOutline} />
              </button> */}
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <>
      <Row className="mx-0">
        <Col sm={12} md={12} lg={12} className="px-0">
          <div className="contentScroll">
            <div className="contentHeader d-flex align-items-center">
              <div className="px-4 w-100">
                <h3 className="contentTitle fs-23 px-0">View Executive Data</h3>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    View Executive Data
                  </li>
                </ol>
              </div>
              <Link
                className="contentAction d-flex align-items-center justify-content-center"
                title="add executive data"
                to="/add-executivedata"
              >
                <Icon path={mdiPlus} />
              </Link>
            </div>
            <div className="contentBody">
              {sessionStorage.getItem("UserID") === 1 || sessionStorage.getItem("UserID") === '1' ? <Table
                columns={columns}
                data={data ? data : []}
                className="contentTable click border border-top-0"
              /> :
                <Table
                  columns={columns_}
                  data={data_ ? data_ : []}
                  className="contentTable click border border-top-0"
                />
              }
            </div>
          </div>
        </Col>
      </Row>
      <Modal size="lg" show={smShow} onHide={() => setSmShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Executive Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table
            columns={columns_}
            data={data_ ? data_ : []}
            className="contentTable click border border-top-0"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

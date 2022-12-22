import { mdiEyeOutline, mdiPencilOutline, mdiPlus, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../Commons/Table";
import {
  deleteExecutiveData
  , getCTCDashboardDetail, getExecutiveCompanyData_admin, getExecutiveData, getExecutiveDataByCompanyID_admin
  , getExecutiveDataByExecutiveID, getExecutiveDataByID_admin, updatecontactpersonstatus
} from "../config/api";

export default function ExecutiveData() {
  const [data, setData] = useState([]);
  const [state, setState] = useState({ Status: "", ExeDataID: "0", UserID: sessionStorage.getItem("UserID") });
  const [data_company_admin, setDataCompanyAdmin] = useState([]);
  const [data_companyid_admin, setDataCompanyIDAdmin] = useState([]);
  const [data_, setData_] = useState([]);
  const [smShow_company, setSmShow_company] = useState(false);
  const [smShow_companyid, setSmShow_companyid] = useState(false);
  const [smShow_status, setSmShow_status] = useState(false);
  const [executiveid_search, setExecutiveID_search] = useState('0');
  const [companyid_search, setCompanyID_search] = useState('0');
  useEffect(() => {
    if (sessionStorage.getItem("UserID") === 1 || sessionStorage.getItem("UserID") === '1') {
      bindData('0');
    } else {
      bindDatabyid(sessionStorage.getItem("UserID"));
    }
  }, []);
  function handlechange_admin(e) {
    if (e.target.value !== '') {
      bindData(e.target.value);
    } else { bindData('0'); }
  }
  function handlechange_company_admin(e) {
    if (e.target.value !== '') {
      bindData_company_admin(e.target.value,executiveid_search);
    } else { bindData_company_admin('0',executiveid_search); }
  }
  function handlechange_companyid_admin(e) {debugger;
    if (e.target.value !== '') {
      bindData_companyid_admin(e.target.value,companyid_search);
    } else { bindData_companyid_admin('0',companyid_search); }
  }
  function handleChange_status(e) {
    setState({ ...state, Status: e.target.value });
  }
  async function bindData(searchtext) {
    await getExecutiveDataByID_admin({SearchText:searchtext,UserID:sessionStorage.getItem("UserID")})
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
  async function bindData_company_admin(searchtext,eid) {
    debugger;
    await getExecutiveCompanyData_admin({SearchText:searchtext,UserID:eid})
      .then((response) => {
        if (response[0].length > 0) {
          setDataCompanyAdmin(response[0]);
        } else {
          setDataCompanyAdmin([]);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function bindData_companyid_admin(searchtext, cid) {
    await getExecutiveDataByCompanyID_admin({SearchText:searchtext, UserID: executiveid_search, CompanyID: cid })
      .then((response) => {
        if (response[0].length > 0) {
          setDataCompanyIDAdmin(response[0]);
        } else {
          setDataCompanyIDAdmin([]);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function bindDatabyid(id) {
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
  async function DeleteData(id, executiveid) {
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

  async function changestatus() {
    debugger;
    await updatecontactpersonstatus(state)
      .then((response) => {
        alert("Status Changed Successfully");
        bindData();
        setSmShow_status(false);
      })
      .catch((error) => {
        alert(error);
      });

  }

  const columns = useMemo(
    () => [
      {
        Header: "Executive Name",
        accessor: "executive_name",
      },
      {
        Header: "Total  Approach Company",
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
              <button className="view" onClick={() => { setSmShow_company(true);setExecutiveID_search(row.original.ExecutiveID); bindData_company_admin('0',row.original.ExecutiveID) }}>
                <Icon path={mdiEyeOutline} />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );
  const columns_company_admin = useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "company_name",
      },
      {
        Header: "Total Contact Person",
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
              <button className="view" onClick={() => { setSmShow_companyid(true);setCompanyID_search(row.original.companyid); bindData_companyid_admin('0', row.original.companyid) }}>
                <Icon path={mdiEyeOutline} />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );
  const columns_companyid_admin = useMemo(
    () => [
      {
        Header: "Contact Person Name",
        accessor: "contact_person_name",
      },
      {
        Header: "Contact Number",
        accessor: "contact_no",
      },
      {
        Header: "Designation",
        accessor: "designation",
      },
      {
        Header: "Date Of Meeting",
        accessor: "dateofmeeting",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Remark",
        accessor: "remark",
      },
      // {
      //   Header: "Spanco(Status)",
      //   id: "ID",
      //   Cell: ({ row }) => {
      //     return (
      //       <div className="actionColumn">
      //         <button className="del" onClick={() => DeleteData(row.original.ExeDataID)}>
      //           <Icon path={mdiTrashCanOutline} />
      //         </button>
      //       </div>
      //     );
      //   },
      // },
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
        Header: "Status",
        accessor: "status",
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
              <button className="view" onClick={() => { setSmShow_status(true); setState({ ...state, ExeDataID: row.original.ExeDataID }) }}>
                <Icon path={mdiEyeOutline} />
              </button>
              {<button className="del" onClick={() => DeleteData(row.original.ExeDataID, row.original.ExecutiveID)}>
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
                {/* <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    View Executive Data
                  </li>
                </ol> */}
              </div>
              <div className="contentSearch">
                <input type="text" placeholder="Search for anything" onChange={handlechange_admin} />
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
      <Modal size="lg" show={smShow_company} onHide={() => setSmShow_company(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Executive (Company Data)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div className="contentSearchLight">
              <input type="text" placeholder="Search for anything" onChange={handlechange_company_admin} />
            </div>
          </Row>
          <Table
            columns={columns_company_admin}
            data={data_company_admin ? data_company_admin : []}
            className="contentTable click border border-top-0"
          />
        </Modal.Body>
      </Modal>
      <Modal size="xl" show={smShow_companyid} onHide={() => setSmShow_companyid(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Executive (Contact Person Data)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div className="contentSearchLight">
              <input type="text" placeholder="Search for anything" onChange={handlechange_companyid_admin} />
            </div>
          </Row>
          <Table
            columns={columns_companyid_admin}
            data={data_companyid_admin ? data_companyid_admin : []}
            className="contentTable click border border-top-0"
          />
        </Modal.Body>
      </Modal>
      <Modal size="sm" show={smShow_status} onHide={() => setSmShow_status(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Change Spanco(Status)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="form-group">
                <label className="form-label">Spanco(Status)</label>
                <select className="form-select" name="status" value={state.Status} onChange={handleChange_status}>
                  <option value="Select">Select</option>
                  <option value="Active">Active</option>
                  <option value="Dormail">Dormail</option>
                  <option value="ToBeApproach">ToBeApproach</option>
                </select>
                {state.errors ? (
                  <div className="invalid-feedback">
                    {state.errors.status}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Col>
            <Col xs={12} md={12} lg={12}>
              <div className="d-flex justify-content-center mt-3">
                <button className="btn indigo" onClick={() => { changestatus() }}>
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

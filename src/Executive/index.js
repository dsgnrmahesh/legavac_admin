import { mdiPlus, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../Commons/Table";
import { deleteUserMaster, getUserMasterDetail } from "../config/api";

export default function Executive() {
  const [data, setData] = useState();
  useEffect(() => {
    bindData();
  });
  async function bindData() {
    await getUserMasterDetail()
      .then((response) => {
        if(response[0].length>0){
        setData(response[0]);
        }
        else{setData([]);}
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function DeleteData(id) {debugger;
    if (window.confirm('Are you sure delete data?')) {
      await deleteUserMaster(id)
        .then((response) => {
          alert("Data Deleted Successfully");
          bindData();
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  const columns = useMemo(
    () => [
      {
        Header: "Executive Code",
        accessor: "executive_code",
      },
      {
        Header: "Executive Name",
        accessor: "executive_name",
      },
      {
        Header: "Email ID",
        accessor: "email_id",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Mobile",
        accessor: "mobile",
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
              <button className="del" onClick={()=>DeleteData(row.original.UserID)}>
                <Icon path={mdiTrashCanOutline} />
              </button>
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
                <h3 className="contentTitle fs-23 px-0">Executive</h3>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Executive
                  </li>
                </ol>
              </div>
              <Link
                className="contentAction d-flex align-items-center justify-content-center"
                title="add executive"
                to="/add-executive"
              >
                <Icon path={mdiPlus} />
              </Link>
            </div>
            <div className="contentBody">
              <Table
                columns={columns}
                data={data?data:[]}
                className="contentTable click border border-top-0"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

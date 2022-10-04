import { mdiPencilOutline, mdiPlus, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "../Commons/Table";
import { getCTCDashboardDetail } from "../config/api";

export default function CTCDashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    bindData();
  });
  async function bindData() {
    await getCTCDashboardDetail(sessionStorage.getItem("UserID"))
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
  const update = (e) => {
    console.log(e);
  };
  const columns = useMemo(
    () => [
      // {
      //   Header: "ID",
      //   accessor: "ID",
      // },
      {
        Header: "Company Name",
        accessor: "company_name",
      },
      {
        Header: "Candidate Name",
        accessor: "candidate_name",
      },
      {
        Header: "CTC/Commercial",
        accessor: "ctc",
      },
      {
        // Header: "% CTC",
        Header: "Professional Fee",
        accessor: "ctc_perc",
      },
      {
        Header: "Total Amount",
        accessor: "total_amount",
      },
      {
        Header: "GST",
        accessor: "gst",
      },
      {
        Header: "Payment Year",
        accessor: "payment_year",
      },
      {
        Header: "Action",
        id: "ID",
        Cell: ({ row }) => {
          return (
            <div className="actionColumn">
              <button className="edit" onClick={(e) => this.update()}>
                <Icon path={mdiPencilOutline} />
              </button>
              <button className="del">
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
                <h3 className="contentTitle fs-23 px-0">CTC Dashboard</h3>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    CTC Dashboard
                  </li>
                </ol>
              </div>
              <Link
                className="contentAction d-flex align-items-center justify-content-center"
                title="add executive"
                to="/dashboard-ctc-add"
              >
                <Icon path={mdiPlus} />
              </Link>
            </div>
            <div className="contentBody">
              <Table
                columns={columns}
                data={data ? data : []}
                className="contentTable click border border-top-0"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

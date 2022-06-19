import React, { useEffect, useState } from "react";
import {
  getMembershipplanDetailSearchText,
  getMembershipplanDetail,
  getMembershipplanDelete,
} from "../config/api";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import {
  mdiPlus,
  mdiFileOutline,
  mdiPencilOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
//import ViewAffilation from "./ViewAffilation";
import AddMembershipPlan from "./AddMembershipPlan";
import Modal from "react-bootstrap/Modal";

export default function ManageMembershipplan() {
  const [data, setData] = useState([]);
  const [viewAffilation, setViewAffilation] = useState();
  const [smShow, setSmShow] = useState(false);
  const [mode, setMode] = useState("Add");
  const [editid, setEditID] = useState();
  useEffect(() => {
    bindData();
    //setViewAffilation(data[0]);
  }, []);
  // useEffect(() => {
  //   bindData();
  // });
  async function bindData() {
    await getMembershipplanDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }


  async function SearchData(e) {

    e.preventDefault();
    let search = e.target.value;

    if (search !== "") {
      await getMembershipplanDetailSearchText(search)
        .then((response) => {
          setData(response.data[0]);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      bindData();
    }
  }

  async function DeleteData(id) {
    if (window.confirm('Are you sure delete data?')) {
      await getMembershipplanDelete(id)
        .then((response) => {
          alert("Data Deleted Successfully");
          bindData();
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  function update(id) {
    setEditID(id);
    setSmShow(true);
    setMode("Edit");
  }
  const renderTableRow = data.map((item, index) => (
    <tr
      className={index === 0 ? "seleted" : ""}
    //onClick={() => setViewAffilation(item)}
    >
      <td className="fileIcon">
        <Icon path={mdiFileOutline} />
      </td>
      <td>{item.PlanName}</td>
      <td>{item.Price}</td>
      <td>{item.Duration}</td>
      <td>{item.Membershipplanfeature}</td>
      <td>
        <div className="actionColumn">
          <button
            className="edit"
            onClick={() => update(item.MembershipplanID)}
            edit={"/Membership/Update/" + item.MembershipplanID}
          >
            <Icon path={mdiPencilOutline} />
          </button>
          <button className="del" onClick={() => DeleteData(item.MembershipplanID)}>
            <Icon path={mdiTrashCanOutline} />
          </button>
        </div>
      </td>
    </tr>
  ));


  return (
    <>
      <Row className="mx-0">
        <Col
          sm={12}

          className="px-0"
        >
          <div className="contentScroll">
            <div className="contentHeader">
              <h3 className="contentTitle">MembershipPlan</h3>
              <div className="contentSearch">
                <input type="text" placeholder="Search for anything" onChange={SearchData} />
              </div>
              <button
                className="contentAction"
                onClick={() => { setSmShow(true); setEditID(0); }}
                title="add Membershipplan"
              >
                <Icon path={mdiPlus} />
              </button>
            </div>


            <div className="contentBody border-end">
              <table className="contentTable click">
                <thead>
                  <tr>
                    <th width={60}>&nbsp;</th>
                    <th>plan Nmame</th>
                    <th>Price</th>
                    <th>Plan Duration</th>
                    <th>Feature</th>
                    <th width="120">action</th>
                  </tr>
                </thead>
                <tbody>{renderTableRow}</tbody>
              </table>
            </div>
          </div>
        </Col>
        {/* {viewAffilation ? (
        <Col sm={12} md={5} lg={4} className="px-0">
          <ViewAffilation data={viewAffilation} />
        </Col>
      ) : (
        ""
      )} */}
      </Row>


      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode} MembershipPlan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMembershipPlan setSmShow={setSmShow} editid={editid} bindData={bindData} />
        </Modal.Body>
      </Modal>
    </>
  );
}

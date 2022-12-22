import React, { useEffect, useState } from "react";
import { getAffilationDetail, getAffilationDelete, getAffilationDetailSearchText } from "../config/api";
import { Col, Row } from "react-bootstrap";
import {
  mdiPlus,
  mdiFileOutline,
  mdiPencilOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import ViewAffilation from "./ViewAffilation";
import AddAffilation from "./AddAffilation";
import Modal from "react-bootstrap/Modal";

export default function ManageAffilation() {
  const [data, setData] = useState([]);
  const [viewAffilation, setViewAffilation] = useState();
  const [smShow, setSmShow] = useState(false);
  const [mode, setMode] = useState("Add");
  const [editid, setEditID] = useState();
  useEffect(() => {
    bindData();
    //setViewAffilation(data[0]);
  }, []);
  async function bindData() {
    await getAffilationDetail()
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
      await getAffilationDetailSearchText(search)
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
      await getAffilationDelete(id)
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
      <td>{item.Title}</td>
      <td>{item.Pdf}</td>
      <td>{item.Image}</td>
      <td>Sep 14 2021 12:09 PM</td>
      <td>
        <div className="actionColumn">
          <button
            className="edit"
            onClick={() => update(item.AffilationID)}
            edit={"/Affilation/Update/" + item.AffilationID}
          >
            <Icon path={mdiPencilOutline} />
          </button>
          <button className="del" onClick={() => DeleteData(item.AffilationID)}>
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
          // md={viewAffilation ? 7 : 12}
          // lg={viewAffilation ? 8 : 12}
          className="px-0"
        >
          <div className="contentScroll">
            <div className="contentHeader">
              <h3 className="contentTitle">affilations</h3>
              <div className="contentSearch">
                <input type="text" placeholder="Search for anything" onChange={SearchData} />
              </div>
              <button
                className="contentAction"
                onClick={() => { setSmShow(true); setEditID(0); }}
                title="add Affilation"
              >
                <Icon path={mdiPlus} />
              </button>
            </div>
            <div className="contentBody border-end">
              <table className="contentTable click">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>PDF File</th>
                    <th>Image</th>
                    <th>modifed</th>
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
            {mode} Affilation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddAffilation setSmShow={setSmShow} editid={editid} bindData={bindData} />
        </Modal.Body>
      </Modal>
    </>
  );
}
